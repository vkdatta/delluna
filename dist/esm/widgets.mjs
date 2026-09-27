export const name="widgets";
export const id="dl_68bd8ff5a52f10aa9be5";
export const url=new URL("../icons/widgets.svg?v=660ab00857d5c957c59e61fbe68bb45f2fd24f257fc556e3cdb1c8960ee32000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
