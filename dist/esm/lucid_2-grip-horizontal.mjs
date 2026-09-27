export const name="lucid_2-grip-horizontal";
export const id="dl_d19a1f0bf0814b8495a1";
export const url=new URL("../icons/lucid_2-grip-horizontal.svg?v=8950f036a8bd30da16dc16ce36d8fba2571a763cea4c84e4d8c7ed7bfc0c08d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
