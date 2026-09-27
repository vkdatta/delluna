export const name="inbox_customize-fill";
export const id="dl_d0a6ad2426e1f14a1660";
export const url=new URL("../icons/inbox_customize-fill.svg?v=edec1c6ea5bbe6d0302a52b8051175821c4f360707f8df0a997ceede3b3d8b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
