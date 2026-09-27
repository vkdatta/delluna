export const name="microscope-fill";
export const id="dl_4bffb4a55e6a4b0781ac";
export const url=new URL("../icons/microscope-fill.svg?v=ec7383982a1c05ae836fa656afac44896361b67ef50a795640486d580816f115",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
