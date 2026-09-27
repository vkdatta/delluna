export const name="whole-word";
export const id="dl_a400e9d373b64fb2988f";
export const url=new URL("../icons/whole-word.svg?v=4f387224dc936c06efff776ae326cd0dcb260099f58248464aa77b967935bacd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
