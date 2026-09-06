export const name="text-cursor";
export const id="dl_4228c34cc73549398999";
export const url=new URL("../icons/text-cursor.svg?v=be0f01c6b70cae70f368c29d174de2a814a650ecf19fa514444250155ae11dc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
