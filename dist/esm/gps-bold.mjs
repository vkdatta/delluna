export const name="gps-bold";
export const id="dl_4a08d360528d4693ac39";
export const url=new URL("../icons/gps-bold.svg?v=4815ae6ceaeed8b0867ebfa632cce944197dae29e7b771d82f0fdeb0d489e4fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
