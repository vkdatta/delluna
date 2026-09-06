export const name="gradient-thin";
export const id="dl_557ba3917d954e52b5f1";
export const url=new URL("../icons/gradient-thin.svg?v=8829d6fd4739f999702cd3aa44a6467856d7c0a3b3b87cd4e42b4b66a2f4603a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
