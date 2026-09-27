export const name="mouse-simple-fill";
export const id="dl_3ef7ac1e70ff4935ae0c";
export const url=new URL("../icons/mouse-simple-fill.svg?v=8132463f286ff0b7104be276385a6eef18eeff8ca0397cc0488bef19b5fad6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
