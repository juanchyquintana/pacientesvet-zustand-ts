export default function Error({children} : {children: React.ReactNode}) {
  return (
    <p className="text-center my-4 p-2 bg-red-600 text-white font-bold uppercase text-sm">{children}</p>
  )
}
