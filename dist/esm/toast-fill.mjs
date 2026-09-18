export const name="toast-fill";
export const id="dl_8bd558e38afb449fbfca";
export const url=new URL("../icons/T/toast-fill.svg?v=1e492f40c4d82fcfc54ef8d1cc59a465a97d7bfb51da7e602a61f1b08fdf3c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
