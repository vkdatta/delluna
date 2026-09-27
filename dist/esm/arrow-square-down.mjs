export const name="arrow-square-down";
export const id="dl_4863a3d92be740329c70";
export const url=new URL("../icons/arrow-square-down.svg?v=e4d8482d2dc4c26e31da0006e082b807d2a829b860f734a6f13faca1113e6b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
