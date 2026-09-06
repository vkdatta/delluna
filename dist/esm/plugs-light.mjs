export const name="plugs-light";
export const id="dl_3829e40911184ab3b12a";
export const url=new URL("../icons/plugs-light.svg?v=8f771da1d5f0730778812155f5eccff2ffc4f5beb540999b18737fd2dcc447b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
