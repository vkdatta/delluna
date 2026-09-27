export const name="shapes-duotone";
export const id="dl_70553edbdf0129e52ce0";
export const url=new URL("../icons/shapes-duotone.svg?v=fc3603e2758c003b68f48fcd8f464fb655e665c185900595cffb19bb06745df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
