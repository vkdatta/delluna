export const name="lucid_1-arrow-big-left-dash";
export const id="dl_c1a016b2b00340a8a78b";
export const url=new URL("../icons/lucid_1-arrow-big-left-dash.svg?v=e20f441c4a5bb7174518f3f93a1a7972f71ee9b5a19e36541c2799427650b92c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
