export const name="draft-fill";
export const id="dl_7070e1688bdad57077b7";
export const url=new URL("../icons/draft-fill.svg?v=607852cf5e60287986cd63914320bb7c51b0ca1cff573f2f4571b37c153310ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
