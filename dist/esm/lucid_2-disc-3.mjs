export const name="lucid_2-disc-3";
export const id="dl_0829e8c5c7f6419d888d";
export const url=new URL("../icons/lucid_2-disc-3.svg?v=abf7e7c5e4c73fb1a403ddd9d892dce557efdf0bd0ade1a3c816eeadce017f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
