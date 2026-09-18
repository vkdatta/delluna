export const name="select_window";
export const id="dl_fde03d6709994368a319";
export const url=new URL("../icons/S/select_window.svg?v=b9d54fd140a54df511ba05a20f0c3f4fd31edda5daa98222b379b7e813718344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
