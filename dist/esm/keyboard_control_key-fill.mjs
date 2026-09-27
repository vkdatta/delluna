export const name="keyboard_control_key-fill";
export const id="dl_1d3e9ef842cc4b7dc9ef";
export const url=new URL("../icons/keyboard_control_key-fill.svg?v=7116096713fd7551da73000f015c74ced2ba56d1616350a0e07ac75650218736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
