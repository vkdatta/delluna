export const name="connected_tv";
export const id="dl_043c4abea0c1b68d1c1a";
export const url=new URL("../icons/connected_tv.svg?v=03ac37f693b62d8b00c251a3ac2c925a403014c157326c9911729c5fa123d104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
