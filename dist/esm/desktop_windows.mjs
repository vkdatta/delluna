export const name="desktop_windows";
export const id="dl_95ff6e467207f2e91fca";
export const url=new URL("../icons/desktop_windows.svg?v=d7248715ea9b0affb58a312b28ea900df185735cbd6c4309321637a083fc2d51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
