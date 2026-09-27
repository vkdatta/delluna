export const name="waves-duotone";
export const id="dl_2165f79f5d93abbba415";
export const url=new URL("../icons/waves-duotone.svg?v=b99f3f989a2745a374cb97cddbc8b11a78dba4df81449c9b2e98fab54614bd29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
