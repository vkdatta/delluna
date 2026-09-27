export const name="repeat-once-fill";
export const id="dl_69a9799d38c949939b4f";
export const url=new URL("../icons/repeat-once-fill.svg?v=d535d54e2bcee4245636561c4c75d7e4918fdc24905a29f927a1ae265e3d9c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
