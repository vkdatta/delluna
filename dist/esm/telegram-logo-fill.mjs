export const name="telegram-logo-fill";
export const id="dl_733823a70e6c5aa7ed67";
export const url=new URL("../icons/telegram-logo-fill.svg?v=f7211868c29157a5c01e32f3a9b7b8a9d073328d29cf1f0869af7895db66aec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
