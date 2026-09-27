export const name="surgical-fill";
export const id="dl_0a958cc0fe767eef2523";
export const url=new URL("../icons/surgical-fill.svg?v=e098e7cc0f9ed49dad205ef7a97acf859815950dfc73ca398c768ae976eaba10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
