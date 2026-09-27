export const name="airplane-landing-duotone";
export const id="dl_832a965a5e32425d9315";
export const url=new URL("../icons/airplane-landing-duotone.svg?v=3b674d5494ac56d075a5ec31811c28d9de179055a46edb2e976f61cb999e26d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
