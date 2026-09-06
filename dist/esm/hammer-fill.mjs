export const name="hammer-fill";
export const id="dl_59ce79513fc84ad8ac6e";
export const url=new URL("../icons/hammer-fill.svg?v=e1f85a791f0c18b239c2f7597dca64b4e8b55975af8c26f5364fab9278a18ec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
