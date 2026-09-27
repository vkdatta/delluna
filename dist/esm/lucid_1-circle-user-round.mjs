export const name="lucid_1-circle-user-round";
export const id="dl_581158a55b3140f6a88f";
export const url=new URL("../icons/lucid_1-circle-user-round.svg?v=43b97997b2cf57ebe1823a9edc92c31275b8241e069a5002ee86c3f038bb325b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
