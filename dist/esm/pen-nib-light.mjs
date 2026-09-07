export const name="pen-nib-light";
export const id="dl_de08daae255d46bf9af2";
export const url=new URL("../icons/pen-nib-light.svg?v=ebd963a32f032a43acece7d07719f64e938336ac8dfe48dbb28c82d1e8f74fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
