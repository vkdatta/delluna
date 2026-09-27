export const name="turkish-lira";
export const id="dl_d2e1c79698d44856be5c";
export const url=new URL("../icons/turkish-lira.svg?v=161fe8608c4db63034055d4b9bd68e5485c6615f314c1f9b0a9c448881c3c51a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
