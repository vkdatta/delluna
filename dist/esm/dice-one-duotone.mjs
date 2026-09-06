export const name="dice-one-duotone";
export const id="dl_d3728f5044fa4d0e97e4";
export const url=new URL("../icons/dice-one-duotone.svg?v=6010e28179e894dbac1ca517c05a113ac8cf43ae36f45b58aba954d4064e7063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
