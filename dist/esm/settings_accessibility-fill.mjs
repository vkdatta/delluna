export const name="settings_accessibility-fill";
export const id="dl_39f45c95b8804afc801c";
export const url=new URL("../icons/settings_accessibility-fill.svg?v=be67903db1ad89f204c879f6a3acdcf19022888927d3af1cecae8f81b58b5ce8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
