export const name="first_page-fill";
export const id="dl_9e67c7a5f2ee453a9613";
export const url=new URL("../icons/F/first_page-fill.svg?v=993b0ab4e3d51b24cca7ba8c9b00ac9763836d32c91c179fe137b5daaf5d1b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
