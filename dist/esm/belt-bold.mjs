export const name="belt-bold";
export const id="dl_482c81be12d1457aaafd";
export const url=new URL("../icons/belt-bold.svg?v=724d481ffe3095f86aa82b1dd366feb01fa58003f6811ad441619121d21bcb04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
