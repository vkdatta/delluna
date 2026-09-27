export const name="go_to_line-fill";
export const id="dl_6be0f8bd9d12740597a0";
export const url=new URL("../icons/go_to_line-fill.svg?v=ea9f61cf7a57384e923f92dfdd748a2b8c09731f7acf584f491f2e2e95616860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
