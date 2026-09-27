export const name="pin_drop";
export const id="dl_d8889172357365b4fd77";
export const url=new URL("../icons/pin_drop.svg?v=e52c4e80a08ee4aacdd4e10ad3884b382ffaa3b20a802977ed930459a2bcb1dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
