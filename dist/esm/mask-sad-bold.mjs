export const name="mask-sad-bold";
export const id="dl_1060a7db79d041d1bd23";
export const url=new URL("../icons/mask-sad-bold.svg?v=4af424e0d9484a51752d53698fd43fbf1b8c48bc2c28deac7c59d062c8e0b251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
