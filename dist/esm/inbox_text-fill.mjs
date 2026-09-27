export const name="inbox_text-fill";
export const id="dl_c782fb7196bafe14a5c4";
export const url=new URL("../icons/inbox_text-fill.svg?v=4e5ec70e8fb08df08eff1607f454228d1238a94dc44f41316cdb56a88c0c0bb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
