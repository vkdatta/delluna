export const name="file_copy-fill";
export const id="dl_7c5614a5e44cb32a4f27";
export const url=new URL("../icons/file_copy-fill.svg?v=a559dab52fcde10cf924129ed7b74fb4d5646e488bd3e70b6b9333999a1b1190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
