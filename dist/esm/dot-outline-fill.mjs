export const name="dot-outline-fill";
export const id="dl_44a905ac3fb746408ac7";
export const url=new URL("../icons/dot-outline-fill.svg?v=c729cd578355ea62f2dd6e5bb581641590844a5a4f5bd1e05ff8e1d1fdcc74f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
