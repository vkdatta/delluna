export const name="edit_arrow_down";
export const id="dl_8ca6e7d2a9c318e0d24c";
export const url=new URL("../icons/edit_arrow_down.svg?v=97dfce20a8f18895e9d0e90abf55a767e517f430aefbbb85290f3f284e5e921b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
