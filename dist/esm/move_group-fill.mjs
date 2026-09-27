export const name="move_group-fill";
export const id="dl_c916a2a05b191be29433";
export const url=new URL("../icons/move_group-fill.svg?v=76cb4a4293e1045f5da1537d4b5b577a9174be94866c5d9808b382eace301f77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
