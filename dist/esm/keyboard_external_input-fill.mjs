export const name="keyboard_external_input-fill";
export const id="dl_5f6afb65cf46a8c093a0";
export const url=new URL("../icons/keyboard_external_input-fill.svg?v=13667a1cb4bff8750d48c36a837d7c28fe26aa4a1115cc7aa28bf24e02e45a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
