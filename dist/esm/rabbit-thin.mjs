export const name="rabbit-thin";
export const id="dl_7791ba92d72c48c4ada2";
export const url=new URL("../icons/rabbit-thin.svg?v=c46ff4bc78e831064c5a0b4f7eb93974d5686cfc118c0f50d653c6c3d9109e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
