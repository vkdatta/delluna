export const name="apple-podcasts-logo";
export const id="dl_7433d34b97f241ac84b4";
export const url=new URL("../icons/apple-podcasts-logo.svg?v=52d9b0292d693df9837409c32823e7d290c9b492ed27ed07468400840315900e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
