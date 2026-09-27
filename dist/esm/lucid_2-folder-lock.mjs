export const name="lucid_2-folder-lock";
export const id="dl_13f4e6a09d574b52aba5";
export const url=new URL("../icons/lucid_2-folder-lock.svg?v=3ac9d9f2dfd8140f9fc361db10f22c46de4456eba3b8f524903622ffe519d302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
