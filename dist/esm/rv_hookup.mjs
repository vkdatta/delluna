export const name="rv_hookup";
export const id="dl_fd9818df781551eba581";
export const url=new URL("../icons/rv_hookup.svg?v=b3044b592aafee9f4a92cfa74d86d10aea7f86f615c33fb38219c3d9844442bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
