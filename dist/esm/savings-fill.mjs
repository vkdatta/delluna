export const name="savings-fill";
export const id="dl_486fff2246c8ce3d4bb0";
export const url=new URL("../icons/savings-fill.svg?v=4b663c542ae0402b0d685b216a62011a5feae1066d376b6d9205cc3a0121840d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
