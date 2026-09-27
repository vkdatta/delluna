export const name="lucid_2-mail-check";
export const id="dl_038743ab46e84dcdae38";
export const url=new URL("../icons/lucid_2-mail-check.svg?v=6067c22b46bc358e20f6602025f494323f9549e42982ecfc08721d238090108b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
