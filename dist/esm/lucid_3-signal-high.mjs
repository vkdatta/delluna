export const name="lucid_3-signal-high";
export const id="dl_b2777495b17246cb8e59";
export const url=new URL("../icons/lucid_3-signal-high.svg?v=92179655c14ea55e13bcb3e49d62bce500bb4cde959141a6eb2bd54751756640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
