export const name="sticky_note_2";
export const id="dl_e67ee3cd41d025294c21";
export const url=new URL("../icons/sticky_note_2.svg?v=6679922a3e7ae625f083e7ae7c62f454b396f30ba041706cb6c1f37f3dd3a577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
