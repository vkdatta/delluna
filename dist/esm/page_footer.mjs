export const name="page_footer";
export const id="dl_acb502230dc9d0dac7db";
export const url=new URL("../icons/page_footer.svg?v=3ebeda753f6b2aa34eb6ecd8a9940c620734ce5ef9fa149afc75eac00d7981b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
