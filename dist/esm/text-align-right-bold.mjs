export const name="text-align-right-bold";
export const id="dl_3a0bf60effadb1f42b46";
export const url=new URL("../icons/text-align-right-bold.svg?v=2dc8ad35265e7eb9b2cb97354cd10fd3bc2a244a597de2a7dd0769fafcce2e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
