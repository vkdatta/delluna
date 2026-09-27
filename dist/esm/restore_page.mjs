export const name="restore_page";
export const id="dl_8a53fd111c7335e08609";
export const url=new URL("../icons/restore_page.svg?v=c1834325f67011be1e0d2f98310b32a09464cf4cbdd300c640a013391889d80f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
