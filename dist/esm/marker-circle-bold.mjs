export const name="marker-circle-bold";
export const id="dl_74b47458dd6f43a590f0";
export const url=new URL("../icons/marker-circle-bold.svg?v=fa450eb520dc62b6db848b50eafe3e3198941e9f490d70dbdf17dc646b0d7428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
