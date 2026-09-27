export const name="panel";
export const id="dl_c9a8402e442a46d78be0";
export const url=new URL("../icons/panel.svg?v=176b361b29928f12c084cbb590c1e36f4fb5b18fcd5a95d913705074adb81ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
