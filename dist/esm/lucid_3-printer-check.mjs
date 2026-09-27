export const name="lucid_3-printer-check";
export const id="dl_4ae3be12b27d414c889f";
export const url=new URL("../icons/lucid_3-printer-check.svg?v=5cc878ecd2c709af9bd903142ae963c7bd915cb87ad0e7f7c55be0b400a837a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
