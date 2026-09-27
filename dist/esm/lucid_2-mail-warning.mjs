export const name="lucid_2-mail-warning";
export const id="dl_a32e4f7580c34f989273";
export const url=new URL("../icons/lucid_2-mail-warning.svg?v=464f410e4f599aeadfea8fb17c8d0efa38e2bdc5ee7d77e31cc8b35db3b2d4d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
