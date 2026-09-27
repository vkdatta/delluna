export const name="note-pencil-thin";
export const id="dl_84a4c8ef2c7f45d3bbfd";
export const url=new URL("../icons/note-pencil-thin.svg?v=dd6b28c2dcbfc31d10d4e2a86d13a556df94086bcdae11384bfe5c95e10e6d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
