export const name="lucid_1-construction";
export const id="dl_162a671615e14ab486fd";
export const url=new URL("../icons/lucid_1-construction.svg?v=20e6c3f58621f4d37b4c58eec93808eabc4d8fc6a051b6a94e7f6c4468605968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
