export const name="speaker-slash-thin";
export const id="dl_d3509352dd547f5fba17";
export const url=new URL("../icons/speaker-slash-thin.svg?v=29d489362b6b8a301c36ad52cabf0f931fd6784edc89157f1fe3f30cc07d0168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
