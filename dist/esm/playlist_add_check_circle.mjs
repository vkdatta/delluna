export const name="playlist_add_check_circle";
export const id="dl_febf78b41c604cf897ca";
export const url=new URL("../icons/P/playlist_add_check_circle.svg?v=5ab9c8fbde56a650657abc08bb093d2792eba7651c596bea6a6bc802fbb7ffc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
