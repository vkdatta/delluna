export const name="compass-thin";
export const id="dl_017729f9b50745b3b068";
export const url=new URL("../icons/compass-thin.svg?v=8bfe54ce0d41c8410bf9b7aa814110e9a5f48fbb81ff75162905e9ea4c4df147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
