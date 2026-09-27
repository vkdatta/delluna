export const name="file-archive-thin";
export const id="dl_59a4ba41e282490ab692";
export const url=new URL("../icons/file-archive-thin.svg?v=5750d24cfc73385b356138fb852676822dfef9d931212cfca5b5b8874e14e219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
