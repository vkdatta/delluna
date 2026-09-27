export const name="sentiment_neutral";
export const id="dl_7951db7c4833c41b31cb";
export const url=new URL("../icons/sentiment_neutral.svg?v=4765e49ace7824c55ff1c92a244f1fb21355e92939e8d076d8d52b80106bbb08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
