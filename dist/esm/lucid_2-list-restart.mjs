export const name="lucid_2-list-restart";
export const id="dl_91197a3949e24a99b713";
export const url=new URL("../icons/lucid_2-list-restart.svg?v=708ce7f3f70e8555e67d5fbee5e2b870cdfcce97a6b2f992d4f2811e53a5093e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
