export const name="lucid_2-file-code-corner";
export const id="dl_6850d937020744ff8745";
export const url=new URL("../icons/lucid_2-file-code-corner.svg?v=601edca695c2115e272d7a8c3ddac5aca2eb68f78a37037e54463ba49bfaeb0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
