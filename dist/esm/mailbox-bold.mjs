export const name="mailbox-bold";
export const id="dl_72eb9bfe87aa43d79562";
export const url=new URL("../icons/mailbox-bold.svg?v=bf6aa40cdf488b1b032ec21e6a5d23c4a954db4bc9ba750134f62d18805f9b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
