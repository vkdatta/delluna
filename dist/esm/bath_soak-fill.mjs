export const name="bath_soak-fill";
export const id="dl_51aac9fd18064330bec4";
export const url=new URL("../icons/bath_soak-fill.svg?v=670ae954e7b3b6251cf7ad092676a212f87104bba4591abc30d41dbf7c4f1b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
