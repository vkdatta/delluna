export const name="tab_close_right";
export const id="dl_971ee30aa7fd771488bb";
export const url=new URL("../icons/tab_close_right.svg?v=0c6c6c3ca82ed1ad41e0cfc9214028c50af1b39852f89fb7fe3941e844238e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
