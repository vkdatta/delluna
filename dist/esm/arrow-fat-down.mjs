export const name="arrow-fat-down";
export const id="dl_e738cb94a79448c2907f";
export const url=new URL("../icons/arrow-fat-down.svg?v=d54577fdda525113617b9f2c8cc4ae71a0bda3e1f2cadb54b1a12d2842ca143c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
