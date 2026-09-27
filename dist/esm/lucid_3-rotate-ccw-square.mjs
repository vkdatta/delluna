export const name="lucid_3-rotate-ccw-square";
export const id="dl_f709b3327c2749fc82e8";
export const url=new URL("../icons/lucid_3-rotate-ccw-square.svg?v=bf6b8ee1cb782dcb3f922fe4e248c3b63b27bae3d6477239a9eaf83fd0d6400e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
