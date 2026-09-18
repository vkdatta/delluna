export const name="local_mall";
export const id="dl_13517e04aada4a6e8073";
export const url=new URL("../icons/L/local_mall.svg?v=7b1f98cff52466cf188a44070fa461a54b55eeabe03fad1cc6b36e5a96ffe746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
