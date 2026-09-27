export const name="hourglass_top";
export const id="dl_49bfdf042e7cfbb5ffc9";
export const url=new URL("../icons/material_symbols/hourglass_top.svg?v=b714233cdca4f198da331ab4806879e6305bb8c3698d6c97dc0a4fbb375544fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
