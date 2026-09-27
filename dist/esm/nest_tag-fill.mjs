export const name="nest_tag-fill";
export const id="dl_c6387ca0044f2e1b4b82";
export const url=new URL("../icons/nest_tag-fill.svg?v=0d3e485fa5344c1ace4888209811d7ce4af6d0c02f60e40a1197f47515579b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
