export const name="battery-charging-vertical-bold";
export const id="dl_b581ae16f66348c89aa3";
export const url=new URL("../icons/battery-charging-vertical-bold.svg?v=8552095ecd2ff0cdf0909415ea358f0448b647c5b0a67343d26a1c4a5708fc3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
