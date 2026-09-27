export const name="folder_check-fill";
export const id="dl_bdb61762645c7c7f081d";
export const url=new URL("../icons/folder_check-fill.svg?v=f7ffb64bf9989dfef910ba9e9abee547c2674ac8aa77c8d97644f9304cc112b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
