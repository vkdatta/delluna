export const name="file-py-fill";
export const id="dl_8a61360a25cc4b45a9aa";
export const url=new URL("../icons/file-py-fill.svg?v=763a7335254cd26587dd6c3584caa274b489b4c8589c0e6b085d941b9e105b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
