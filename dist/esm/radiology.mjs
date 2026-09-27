export const name="radiology";
export const id="dl_ca45e6d272cc0bcf3e94";
export const url=new URL("../icons/radiology.svg?v=ab95ef18f3115df52917bb175c74c5ff99f516a61b0678d303db9df1349feb9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
