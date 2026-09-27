export const name="caret-double-up";
export const id="dl_3dc91df9643549439a02";
export const url=new URL("../icons/caret-double-up.svg?v=ba54f9a8a93480a94a9830b8a8ab89d52386d31c7e5b14e834e3bd2ae5995493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
