export const name="tv_remote-fill";
export const id="dl_9fcb0247928613e68a4d";
export const url=new URL("../icons/tv_remote-fill.svg?v=3a589004f4ccfd2e3cc299a2e793add6c7d5bd32b93378ccfceac2fad7100b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
