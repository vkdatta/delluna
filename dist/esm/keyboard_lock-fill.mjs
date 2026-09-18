export const name="keyboard_lock-fill";
export const id="dl_e74cda24fc10445fbef7";
export const url=new URL("../icons/keyboard_lock-fill.svg?v=45f0584ec5056942c3c15c609cde2be9d70bdfa8e5d66e60cdbf11d602125e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
