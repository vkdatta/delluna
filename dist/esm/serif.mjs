export const name="serif";
export const id="dl_6d4adadf89b428bbddac";
export const url=new URL("../icons/serif.svg?v=25fded4905b4d404a6c0b3ea4cc0cfd6f36a13861bf448164f29b843784aa8a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
