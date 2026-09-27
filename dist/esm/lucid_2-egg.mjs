export const name="lucid_2-egg";
export const id="dl_e855aab83d554052aee7";
export const url=new URL("../icons/lucid_2-egg.svg?v=c3979c90db2dbcf49a8eea265b7f35c98cb38433934feb8a8cd8771c2de411d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
