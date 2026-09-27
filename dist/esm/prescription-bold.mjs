export const name="prescription-bold";
export const id="dl_0f403a71ea684ad4aa7d";
export const url=new URL("../icons/prescription-bold.svg?v=6b2d04272dbebd8bde4b6b94747aae533918b88ac00e3211f31fc3bd8929c835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
