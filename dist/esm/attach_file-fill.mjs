export const name="attach_file-fill";
export const id="dl_c8d1eae77a90006083ac";
export const url=new URL("../icons/attach_file-fill.svg?v=4fe5922bd110245f1243eb3eafac785c8d8dca110c8c393a3e3ed97d8d456885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
