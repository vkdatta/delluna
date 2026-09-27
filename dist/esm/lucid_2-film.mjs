export const name="lucid_2-film";
export const id="dl_be504034fc8642a28af5";
export const url=new URL("../icons/lucid_2-film.svg?v=55867be097c7162b2ec26c04cdde1de23b852909ea32c6b3b951a45e88ed668f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
