export const name="send_and_archive-fill";
export const id="dl_3f7bf784350ab0908b4d";
export const url=new URL("../icons/send_and_archive-fill.svg?v=ca0b2b76ab0f0cb0c9cc2807fed400504d3b95b8421ffc0d2dd81c5392cf8681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
