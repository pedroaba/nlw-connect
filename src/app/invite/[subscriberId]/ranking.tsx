import Image from 'next/image'

import MedalCooperLogo from '@/assets/medal-cooper.svg'
import MedalGoldLogo from '@/assets/medal-gold.svg'
import MedalSilverLogo from '@/assets/medal-silver.svg'
import { getRanking } from '@/http/api'

export async function Ranking() {
  const { ranking } = await getRanking()
  const medals = [MedalGoldLogo, MedalSilverLogo, MedalCooperLogo]

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={rank.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {rank.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {rank.score}
              </span>

              <Image
                src={medals[index]}
                alt=""
                className="absolute top-0 right-8"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
