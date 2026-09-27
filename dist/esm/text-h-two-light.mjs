export const name="text-h-two-light";
export const id="dl_55400463f9f54739f714";
export const url=new URL("../icons/text-h-two-light.svg?v=31a7babf373cea8519329c95681af8b56623cc3ce9e736739627253b3643aed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
