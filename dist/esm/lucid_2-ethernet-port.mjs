export const name="lucid_2-ethernet-port";
export const id="dl_8c0ae73f8c4d4856aef8";
export const url=new URL("../icons/lucid_2-ethernet-port.svg?v=132d01008d16835690e6fd37ed0cebcef9580ba8c40874df62232ddb5b46b82c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
