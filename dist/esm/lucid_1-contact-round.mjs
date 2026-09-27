export const name="lucid_1-contact-round";
export const id="dl_21ab568ba1444c5b8e3d";
export const url=new URL("../icons/lucid_1-contact-round.svg?v=945e50f4cd96c5d2eaa4914d85bb40051d9b449d4340a30a5b4b1a4d3eff496f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
