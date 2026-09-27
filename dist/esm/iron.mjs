export const name="iron";
export const id="dl_89a5820acc705b88c693";
export const url=new URL("../icons/iron.svg?v=410e2e7ff8c8fc43fd75ead7b27a70d6211f7d7ca5db2ee438fe0de5117d9f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
