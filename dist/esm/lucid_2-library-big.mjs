export const name="lucid_2-library-big";
export const id="dl_b41ccf4e83b0496d99f7";
export const url=new URL("../icons/lucid_2-library-big.svg?v=4504a6639209cc1491d85cd92aa8980dd1ddd8a8620b7061412f8a4ccaf8128e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
