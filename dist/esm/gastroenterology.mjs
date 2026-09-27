export const name="gastroenterology";
export const id="dl_d612f2b3c613f821008f";
export const url=new URL("../icons/gastroenterology.svg?v=c6064bf133e775c1a3b1151b9b25115c5de757c9006c1ca7c7d20d18e03b4169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
