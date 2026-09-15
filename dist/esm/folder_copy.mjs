export const name="folder_copy";
export const id="dl_ffa1400321a44a7787f3";
export const url=new URL("../icons/F/folder_copy.svg?v=27169eece8d1aa29f32c137270436f8305bdd3bee207ca0ae26353ffe72dbfc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
