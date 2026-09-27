export const name="reopen_window-fill";
export const id="dl_d911e972927f47d6b65e";
export const url=new URL("../icons/reopen_window-fill.svg?v=473ba4c148f3ae0d231400438b1ff55be0329a6e008179b0a2911f84fac234ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
