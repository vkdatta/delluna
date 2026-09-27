export const name="text-align-left-fill";
export const id="dl_b06ea4ff9e3a32143aef";
export const url=new URL("../icons/text-align-left-fill.svg?v=305a7d71a3740a75ad4ae4881dbb434cd705fcd6602d6a452b03f28a3f32ca23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
