export const name="rocket_launch";
export const id="dl_88baf6da70344ed5b34a";
export const url=new URL("../icons/R/rocket_launch.svg?v=7abb1aa0b0240fba85c50d35c40f1b9671c4d96aeaca15c9d7ceee8803976b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
