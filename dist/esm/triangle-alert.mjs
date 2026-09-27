export const name="triangle-alert";
export const id="dl_2bf1b2da7bcc4f03bf0b";
export const url=new URL("../icons/triangle-alert.svg?v=c7989cdbe3b5bd8ceed048f16785d70d159dfcba4a190bca7b319a36480ef1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
