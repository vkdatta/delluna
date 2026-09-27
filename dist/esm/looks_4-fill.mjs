export const name="looks_4-fill";
export const id="dl_caed935471c9c70f5261";
export const url=new URL("../icons/looks_4-fill.svg?v=ac0e9317fef38712d89b9e4909aae27d6b6cdcd1a040e79e7f62aded97fdd3ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
