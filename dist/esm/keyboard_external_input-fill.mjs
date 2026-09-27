export const name="keyboard_external_input-fill";
export const id="dl_43b254a951f4dd9d0bb3";
export const url=new URL("../icons/keyboard_external_input-fill.svg?v=5afac6c8bab9801397addf8ad21d3c0853083385dfbd38f21c39e20fa46ff7e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
