export const name="television-fill";
export const id="dl_929bcc0ce4b15121f8f9";
export const url=new URL("../icons/television-fill.svg?v=3e85af922b2b3d23924ef83dc5d8132358ee99795cd0f616f07c5aa3fd002758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
