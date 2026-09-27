export const name="settop_component";
export const id="dl_6eac912deccea88768e6";
export const url=new URL("../icons/settop_component.svg?v=6b302b98f5c7b99a8046660acc8b09c5b1a17757dfa0a31ef76d2575c0ea8037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
