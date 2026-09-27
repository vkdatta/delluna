export const name="caret-circle-double-right-fill";
export const id="dl_4b8616a9233b4f63a874";
export const url=new URL("../icons/caret-circle-double-right-fill.svg?v=86c63870503ee3e769298eb392da46011ca11a48674134996456af0e01f4df8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
