export const name="pen-nib-bold";
export const id="dl_ae381aa517604d7483eb";
export const url=new URL("../icons/pen-nib-bold.svg?v=6070af443329fb217772f545b0ab288efd661be84346f54dbe20edc6162ccca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
