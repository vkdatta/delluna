export const name="lucid_3-pi";
export const id="dl_b7ed59f03aa24ce09c9f";
export const url=new URL("../icons/lucid_3-pi.svg?v=85f136e7fe66c51ae90324fe1b9e330334da805b903781516e375aa9202c0fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
