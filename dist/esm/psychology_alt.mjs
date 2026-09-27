export const name="psychology_alt";
export const id="dl_8f9d735cdc6d8b22206c";
export const url=new URL("../icons/psychology_alt.svg?v=3a4595749e3327882abb3233090017c7e59eb34563686c08dde9518b7f51d926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
