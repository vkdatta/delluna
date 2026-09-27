export const name="leak_add-fill";
export const id="dl_cdba6d03d53065d72f23";
export const url=new URL("../icons/leak_add-fill.svg?v=f1ffd678f41cedc4ad2f36eeaf784d0a488d263baba8db129963d068aa746806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
