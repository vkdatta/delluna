export const name="nuclear-plant-light";
export const id="dl_4170b3336ed44ad5bbc8";
export const url=new URL("../icons/nuclear-plant-light.svg?v=17c6889764dfd39cebe14a8277ba307d7f97e2341c953db396a5196351202302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
