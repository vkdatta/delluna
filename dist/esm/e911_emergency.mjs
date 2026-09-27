export const name="e911_emergency";
export const id="dl_19a5985580caeffa93cf";
export const url=new URL("../icons/e911_emergency.svg?v=5b8c7e2941be737b449b19c4f725a21dc148d8be4625dbefe393337295311c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
