export const name="spotify-logo-fill";
export const id="dl_5c0c0e3018483af626ae";
export const url=new URL("../icons/spotify-logo-fill.svg?v=6da7c03b31648a945b460cd43333fd6b94fdff75e27ee9d34f4a0726dc8e4ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
