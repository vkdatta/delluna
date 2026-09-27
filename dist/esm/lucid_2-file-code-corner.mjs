export const name="lucid_2-file-code-corner";
export const id="dl_6850d937020744ff8745";
export const url=new URL("../icons/lucid_2-file-code-corner.svg?v=fdb9b7cb6810533c7773d8addeadc6bd40c149239db5abc93b5df80a56134741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
