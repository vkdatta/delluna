export const name="counter_7-fill";
export const id="dl_cb0e54640867bc9ebbdc";
export const url=new URL("../icons/counter_7-fill.svg?v=8d92c00f936b2e0a042511a2d1765123c9503ef5ea44c9752a50928ccc251078",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
