export const name="venus";
export const id="dl_a5f5f6f474f848e2b465";
export const url=new URL("../icons/venus.svg?v=5167544bf6b9a387ad8317267197a3ba38da8576e086b34e5a4372247ea28f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
