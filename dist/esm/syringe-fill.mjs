export const name="syringe-fill";
export const id="dl_5aa601599e781be3443d";
export const url=new URL("../icons/syringe-fill.svg?v=b96719b7b7a4b89400931a339da916326bf72de3ef2c3b3b05e8885d4b09aabe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
