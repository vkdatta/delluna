export const name="toggle_off";
export const id="dl_4f6fa2937d92aa7c5a39";
export const url=new URL("../icons/toggle_off.svg?v=0119fd70311a16ccf12269309f388cbfa8fb7d9dbb879d0c3a2e7d534db85446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
