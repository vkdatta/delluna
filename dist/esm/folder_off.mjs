export const name="folder_off";
export const id="dl_e3a4370f9d6249e6ba98";
export const url=new URL("../icons/F/folder_off.svg?v=8ecf02e9e3203f5713d428001bd2e3a39291b4f8dfa70311523431c5f7a82535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
