export const name="rss-fill";
export const id="dl_89bf4f8a2a904d289e59";
export const url=new URL("../icons/rss-fill.svg?v=8af9ecf52398cfe0979b67bd9fcf8818d76f49d93153bcca0107eba9c8ddf512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
