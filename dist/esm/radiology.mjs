export const name="radiology";
export const id="dl_f9a620623ef25a13e324";
export const url=new URL("../icons/radiology.svg?v=28720853e335407c133dfd882137eba49049939c6b7899f5b0ad4227e5f70564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
