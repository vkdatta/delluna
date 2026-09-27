export const name="lucid_2-list-ordered";
export const id="dl_a50e8ee24484481880cc";
export const url=new URL("../icons/lucid_2-list-ordered.svg?v=b063af64138136e8012bc423b2b6a13d60bff022e15e8b928531cd4ec0a42db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
