export const name="fax-fill";
export const id="dl_81f4a98f74c2f34607d8";
export const url=new URL("../icons/fax-fill.svg?v=e42af5bc07840394156a0af8382412ddd9889688cde65a83f6832971b8ca274d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
