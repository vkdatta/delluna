export const name="align-top-simple-fill";
export const id="dl_eb2e5c5156e1466488e8";
export const url=new URL("../icons/align-top-simple-fill.svg?v=051ccd680f2db0de5fea0f615e8460046c1432625819fddcaecc8da9a8cc1f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
