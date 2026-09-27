export const name="skip_previous-fill";
export const id="dl_889f7f2f8c3c3a702a36";
export const url=new URL("../icons/skip_previous-fill.svg?v=c5e0ba7b68371c69a9e15d4be828cc10aae9d935d3d9f04a7ad0e4872382b398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
