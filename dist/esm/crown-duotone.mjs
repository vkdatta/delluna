export const name="crown-duotone";
export const id="dl_c57aa75afa62404fa9c7";
export const url=new URL("../icons/crown-duotone.svg?v=d7f9ef8d51235125f8ad15f4ecb9bf3a90dcc961b15896c181b58a462476f392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
