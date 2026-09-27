export const name="format_color_fill-fill";
export const id="dl_6a77b0e85a213af62771";
export const url=new URL("../icons/format_color_fill-fill.svg?v=b40f4822e61a0bf86d5b5f396652752b3c7ff91c2528395ba484cc369dd9f22d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
