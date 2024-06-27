export default function Spinner() {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-14 h-14 border-[2px] border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}