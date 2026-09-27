export const name="lucid_1-bring-to-front";
export const id="dl_233f080f0db44483a17f";
export const url=new URL("../icons/lucid_1-bring-to-front.svg?v=0a20cad56511ab20a34b6100088df22b20170183cbcb944706beee1e8dc2d507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
