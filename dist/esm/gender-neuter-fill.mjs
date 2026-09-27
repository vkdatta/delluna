export const name="gender-neuter-fill";
export const id="dl_6372a6b22db64c05ab69";
export const url=new URL("../icons/gender-neuter-fill.svg?v=03f182fd7e2bc58432a5b115c00235f17ff59be4179a407a44e725fff212cccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
