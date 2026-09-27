export const name="nest_doorbell_visitor";
export const id="dl_f86226c7cca87f7b3637";
export const url=new URL("../icons/nest_doorbell_visitor.svg?v=db127c3bff6ad6dc29c75337651afacf9be6c7759af82f12b5a2bdb23512bdac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
