export const name="shower-fill";
export const id="dl_72ce3cd94b44e860b0d0";
export const url=new URL("../icons/shower-fill.svg?v=db38c9233f9322004aef79518c0619844910b9315d71069bae5d1040ac391ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
