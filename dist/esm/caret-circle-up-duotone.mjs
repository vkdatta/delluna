export const name="caret-circle-up-duotone";
export const id="dl_0800cd06833147e7893c";
export const url=new URL("../icons/caret-circle-up-duotone.svg?v=14187ef058dc30eaf94ee612dbc45f97e000db0efebf1775d03f2b59b6943d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
