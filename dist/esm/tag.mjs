export const name="tag";
export const id="dl_22c5d43ef23249698bd2";
export const url=new URL("../icons/tag.svg?v=ef2981cf374c4194dca418fb1b34f8778cbaf369a0856b17477efa7a2e3f6c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
