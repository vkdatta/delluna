export const name="file-lock-thin";
export const id="dl_71df01e216434b84917a";
export const url=new URL("../icons/file-lock-thin.svg?v=b156d6b082600923600d564b021b7c3cf5bd534136769c72f5e650c48505ef86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
