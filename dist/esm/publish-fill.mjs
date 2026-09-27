export const name="publish-fill";
export const id="dl_5c81e84b46c28fb4ed0c";
export const url=new URL("../icons/publish-fill.svg?v=2bafad7dae731cdb64214b06162b6d48ff651228b419a57ed8de048123a0056b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
