export const name="envelope-simple-bold";
export const id="dl_6b67ae8935984bc79e9a";
export const url=new URL("../icons/envelope-simple-bold.svg?v=fcb4f24652f68f5f325f3a7aab3d4a4432cecdd05bdc2ac1d38c0e2c708bbb67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
