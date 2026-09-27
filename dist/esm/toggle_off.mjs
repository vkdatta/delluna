export const name="toggle_off";
export const id="dl_1326d5bba1e57323d7ba";
export const url=new URL("../icons/toggle_off.svg?v=3990d2a38630712ca95d9159ee7ec7f9eee24aae0209aa547fd8b08ea0a140b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
