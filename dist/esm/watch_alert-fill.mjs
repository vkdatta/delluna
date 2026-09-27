export const name="watch_alert-fill";
export const id="dl_0f1b23996bfc1e73887d";
export const url=new URL("../icons/watch_alert-fill.svg?v=473c9c7a71ca5c28046835e74183ebe9d97610cd37a60955116db7ae2adebfff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
