export const name="file-code-thin";
export const id="dl_37d59867dd804775b322";
export const url=new URL("../icons/file-code-thin.svg?v=ed0e85c30ac6b73fc3783b3b4e759baf61f9d1e2f1e865d77e4164ed4196e3f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
