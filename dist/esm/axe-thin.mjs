export const name="axe-thin";
export const id="dl_5e092ffa31c04743bddc";
export const url=new URL("../icons/axe-thin.svg?v=f53dfe9bf70b1ac62ea2afd08aa3eee18950a45f4b19a24a529a0abe72f064cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
