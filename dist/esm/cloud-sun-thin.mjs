export const name="cloud-sun-thin";
export const id="dl_8123491b970844c096d3";
export const url=new URL("../icons/cloud-sun-thin.svg?v=b5f0f4824f49d0049ff25b7b4a2dc0f1c1a749b30dcf22bf8145e5e3408c19aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
