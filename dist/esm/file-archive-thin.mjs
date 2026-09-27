export const name="file-archive-thin";
export const id="dl_59a4ba41e282490ab692";
export const url=new URL("../icons/file-archive-thin.svg?v=f25ef493df04870033277ddfc83ff6c7c46ae627fdd899bd0cae2f3ff0477946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
