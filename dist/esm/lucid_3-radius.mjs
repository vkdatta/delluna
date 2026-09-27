export const name="lucid_3-radius";
export const id="dl_ad55a1a92fab4a2ea7f9";
export const url=new URL("../icons/lucid_3-radius.svg?v=00d15092c228480dce52e62d2732c77276ec6e5e0cec9c6843f7409d3299d073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
