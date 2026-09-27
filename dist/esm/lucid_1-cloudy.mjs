export const name="lucid_1-cloudy";
export const id="dl_39dec73da1f24f36bd1c";
export const url=new URL("../icons/lucid_1-cloudy.svg?v=385f9b1a7d75c4bb2dddaee67e783629dcf89adab336deb5dbd3620d884a078f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
