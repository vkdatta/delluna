export const name="thermometer-hot-light";
export const id="dl_b2db46b0503a7839c2e7";
export const url=new URL("../icons/thermometer-hot-light.svg?v=9d497cd23fb28b63263c2deafd339430be171f7af6a2099eaddddd252b33d344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
