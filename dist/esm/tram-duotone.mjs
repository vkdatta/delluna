export const name="tram-duotone";
export const id="dl_481e599fc0c7c1cb67e5";
export const url=new URL("../icons/tram-duotone.svg?v=2e41e920bc20cac96358d6f22a0f1179fd0d53ac0278f1151162ef58dab92fb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
