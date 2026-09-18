export const name="nephrology-fill";
export const id="dl_66096fec18f34aada1e5";
export const url=new URL("../icons/nephrology-fill.svg?v=6b14f50643767bcfe5c0bd272310f3281ce81aaa2ff0b6e69d189d466e958a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
