export const name="lucid_1-cloud-snow";
export const id="dl_b481140de0f943ba9e5b";
export const url=new URL("../icons/lucid_1-cloud-snow.svg?v=f53b0a2d43339254b697471b7c1c5dc4fa23476a5ccf373634792fc7f02fd2d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
