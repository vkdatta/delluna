export const name="link-simple-light";
export const id="dl_82be94ab915c457a8c13";
export const url=new URL("../icons/link-simple-light.svg?v=f272e7f0c8d4ed5a2067f323cd363c4bdaeaf64f085045aa2d711fce5414d7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
