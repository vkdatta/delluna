export const name="prescription-light";
export const id="dl_d8483d69400946ad96c7";
export const url=new URL("../icons/prescription-light.svg?v=6ba4c0e4259900be39374a51f071ae623d9f4ef60146ff6b5b08e6f14a2785d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
