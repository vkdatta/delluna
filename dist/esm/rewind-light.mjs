export const name="rewind-light";
export const id="dl_d1a0fde959c8441898e6";
export const url=new URL("../icons/rewind-light.svg?v=84899913fb6cd9ef108d827146c8d9405b346aca0f99637ec606f1e1db62109c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
