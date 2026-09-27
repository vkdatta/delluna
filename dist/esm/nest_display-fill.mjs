export const name="nest_display-fill";
export const id="dl_5b47211b447ad49b3c0e";
export const url=new URL("../icons/nest_display-fill.svg?v=1cf6183859efa741935a167170c49b80b88136f457223271bbd9ab5e3f81eafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
