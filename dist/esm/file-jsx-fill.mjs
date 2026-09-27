export const name="file-jsx-fill";
export const id="dl_e8c3eb15a2a148599e34";
export const url=new URL("../icons/file-jsx-fill.svg?v=c3762f8abc77d44cc2beb0fefc44be7c68127a299e9babd40e3a7cdeaadcf9e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
