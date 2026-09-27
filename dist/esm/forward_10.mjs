export const name="forward_10";
export const id="dl_5fb8c4b2377ca7ef2afd";
export const url=new URL("../icons/forward_10.svg?v=226be894066a583390f659cfc13a116434f0f3e81dfee734a48b5302e3088dce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
