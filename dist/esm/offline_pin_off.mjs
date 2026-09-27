export const name="offline_pin_off";
export const id="dl_1cd922f1ef8d98fa3f6d";
export const url=new URL("../icons/offline_pin_off.svg?v=ede4709fc69991d05f002f10617693f6cb7f74e4e50b5e4339d10552c33578d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
