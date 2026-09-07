export const name="selection-slash-duotone";
export const id="dl_9bed8b60f93144fbb74d";
export const url=new URL("../icons/S/selection-slash-duotone.svg?v=63f91ad8f592fed6dfbc86930c8245c325618d2e956b4c43a7a70eacf73e74ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
