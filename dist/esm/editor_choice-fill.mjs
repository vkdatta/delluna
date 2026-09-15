export const name="editor_choice-fill";
export const id="dl_4c60065d1e4942868aac";
export const url=new URL("../icons/E/editor_choice-fill.svg?v=4e9a01fd6b6de798e657580a4c11a24f02925782d7b3b67d743d8cc5ab2bcc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
