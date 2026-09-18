export const name="browse";
export const id="dl_dc0276c4d61d4b8890de";
export const url=new URL("../icons/browse.svg?v=09eb9ef5aa306f16d6f43fe2128067c67c78bf7eb1c515a8b2b10646d9aaa341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
