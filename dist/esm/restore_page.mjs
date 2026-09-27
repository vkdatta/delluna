export const name="restore_page";
export const id="dl_ed3de7cc623eb9af0586";
export const url=new URL("../icons/restore_page.svg?v=69933d46556b47132bafcc4234a4c54387d2a17e7945700191051b20ed4668ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
