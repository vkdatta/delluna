export const name="jewelry-fill";
export const id="dl_e64d82b38e72f8de3109";
export const url=new URL("../icons/jewelry-fill.svg?v=9a9ca85028aaffefd006e485eac8fd360802df21fa8f9a713e52b60d175ce5df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
