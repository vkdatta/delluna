export const name="not_started-fill";
export const id="dl_7ceb2ca3dc1945449cab";
export const url=new URL("../icons/N/not_started-fill.svg?v=f4707cfd573bd5a47823378029a30f9ea10d6a4bba9e3e08e249ace48203713e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
