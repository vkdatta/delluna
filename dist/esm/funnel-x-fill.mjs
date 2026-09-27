export const name="funnel-x-fill";
export const id="dl_e82e173a45b34f7f9b07";
export const url=new URL("../icons/funnel-x-fill.svg?v=c32a79fa7d34201a72c2d73d476d7b391f6ea8f4ae2f4b1a7481aab9e518a971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
