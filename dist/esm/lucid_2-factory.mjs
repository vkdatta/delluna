export const name="lucid_2-factory";
export const id="dl_2e2f972cae464be0bdc8";
export const url=new URL("../icons/lucid_2-factory.svg?v=22c3420d949db368bedd75f8acc4f2bff6e30715458f834539c17a634cf357de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
