export const name="triangle-dashed";
export const id="dl_12101ec8ed1640efaaac";
export const url=new URL("../icons/triangle-dashed.svg?v=18893004db6d1e8d28bfacb188213e30b378167ea56b4e7c65a045856cc6d99b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
