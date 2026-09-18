export const name="oven_gen-fill";
export const id="dl_a328c2e40dd9492eb07c";
export const url=new URL("../icons/oven_gen-fill.svg?v=7b6f997b7be7dd75a4a284312ab5d0ce4095f6ef3053bbabb62f6a7097aec711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
