export const name="desktop_landscape-fill";
export const id="dl_6a6ee6503a4c8b0611dc";
export const url=new URL("../icons/desktop_landscape-fill.svg?v=fa9172ca6dfa9ff519e6fbb2ac36f9e3ac3bd2b01de41411239412bdad4843d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
