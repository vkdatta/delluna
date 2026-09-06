export const name="telescope";
export const id="dl_79a217c815df40569378";
export const url=new URL("../icons/telescope.svg?v=bf24b797233c7171248d67f898124fbb8cd32268c8fe235d7a5241876dc043f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
