export const name="family_group-fill";
export const id="dl_30ae2ee4a2e9752583f9";
export const url=new URL("../icons/family_group-fill.svg?v=92667d7fb1fdd58dd184f7f76187646b514e81915ee417bc9e2344933949ea77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
