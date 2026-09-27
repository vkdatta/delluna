export const name="radioactive-thin";
export const id="dl_39c2ad53ca5b433ebd5b";
export const url=new URL("../icons/radioactive-thin.svg?v=f77d7ea6af4a4f08cea8854fa5b725b63aa9684b443a23c3c8efec732a6e0f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
