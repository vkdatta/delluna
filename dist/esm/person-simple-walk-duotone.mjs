export const name="person-simple-walk-duotone";
export const id="dl_78226f0b2d834d999640";
export const url=new URL("../icons/person-simple-walk-duotone.svg?v=80c3c48ca389909be115724b0ce2d2813cc02f110051157b5c527fae1b498dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
