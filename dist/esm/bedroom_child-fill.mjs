export const name="bedroom_child-fill";
export const id="dl_48e4cd00cf51a48c3092";
export const url=new URL("../icons/bedroom_child-fill.svg?v=17494b59dd42df9dff583ca4edba3b4934a36e5d549d0edc3d10659c4960bea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
