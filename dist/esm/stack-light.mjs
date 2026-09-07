export const name="stack-light";
export const id="dl_e511f6c5e95c4ce69fa3";
export const url=new URL("../icons/S/stack-light.svg?v=9803255a4fc3fd5bf33e4f73a444047a4de352401156f7419a16ddbc6d564953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
