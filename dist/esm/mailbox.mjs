export const name="mailbox";
export const id="dl_69406666524b4875b0ac";
export const url=new URL("../icons/mailbox.svg?v=8b6c5b3c7a63e9c34784ed616ab63e010e965c88054b42e8e92e5a967747f12f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
