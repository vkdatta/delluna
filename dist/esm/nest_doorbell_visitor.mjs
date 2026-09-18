export const name="nest_doorbell_visitor";
export const id="dl_24fb711693584e78ab03";
export const url=new URL("../icons/nest_doorbell_visitor.svg?v=d27081df6dc43723747b7e6dc16852c2af039597d53ac07498c5c84e7bc97551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
