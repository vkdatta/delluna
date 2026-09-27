export const name="lucid_3-signal-zero";
export const id="dl_e59fff0d87114d44ba89";
export const url=new URL("../icons/lucid_3-signal-zero.svg?v=a770d70d634f6adb59dd61179085b37ad171bc17ed3b6ba7e926c9f5adc2b890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
