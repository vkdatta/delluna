export const name="link-fill";
export const id="dl_c117d09a7a424b6698b7";
export const url=new URL("../icons/link-fill.svg?v=f1d600818a41a1cee66bab384bb5c17ddeb35c386cd3c0e171910d9e260e33fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
