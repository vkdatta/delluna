export const name="lucid_3-settings";
export const id="dl_a413bcedb4d94f1faae7";
export const url=new URL("../icons/lucid_3-settings.svg?v=6d236ec4240da26004870155bfa4618da8b434f3422eec6c0038b9c68782f7cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
