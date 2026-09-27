export const name="personal_injury-fill";
export const id="dl_b50571ebe0e2d8520038";
export const url=new URL("../icons/personal_injury-fill.svg?v=6ac132928eb8dd3319bb523b746a7e164319feb91f1b43998b46cc6bf83512f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
