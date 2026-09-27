export const name="bolt_boost";
export const id="dl_927cb1871385fec32d26";
export const url=new URL("../icons/bolt_boost.svg?v=3f6d7f94623a3927977039e6e82067bd2e52f0b80ae8862592530944d76a1eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
