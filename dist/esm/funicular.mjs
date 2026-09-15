export const name="funicular";
export const id="dl_8ef2240cdaf74f90ab04";
export const url=new URL("../icons/F/funicular.svg?v=aa0cdd3ac6eefa0886df6250bf2774b24a40b21a2dafc21288cf89e4692c6afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
