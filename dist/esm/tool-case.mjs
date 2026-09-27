export const name="tool-case";
export const id="dl_2774ea49bb3a4b239fd2";
export const url=new URL("../icons/tool-case.svg?v=49d87dbb720fb20034a567afa49bf812cc0cc53e49dd5ac9cc43fab749a8dce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
