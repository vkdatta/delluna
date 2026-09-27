export const name="ev_shadow_add";
export const id="dl_f28e1a9b08ea07f55b7d";
export const url=new URL("../icons/ev_shadow_add.svg?v=68898831fb3a2beca27ea5dac978a8be208386fb78d101872ff11f9a36e83403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
