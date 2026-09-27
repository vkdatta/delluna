export const name="dock_to_right-fill";
export const id="dl_75d3042262456d8f396b";
export const url=new URL("../icons/dock_to_right-fill.svg?v=727dc2ff0f7f7c05545a193e82b7be7d5759a0e1affef42603606be5f99017a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
