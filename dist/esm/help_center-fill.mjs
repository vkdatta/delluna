export const name="help_center-fill";
export const id="dl_67c496d4b55f36ad63ca";
export const url=new URL("../icons/help_center-fill.svg?v=84cbeff5ef595f1513599419413c180c0c6f47a827e0102cb0d50e543edcda72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
