export const name="auto_transmission-fill";
export const id="dl_d877a709e5aa497195a3";
export const url=new URL("../icons/auto_transmission-fill.svg?v=da28b23af7ce45186972305e57376db3de7bec364f0e62ff3c9abbe6f06d8d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
