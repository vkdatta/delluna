export const name="reopen_window-fill";
export const id="dl_071927fcd01eda20769a";
export const url=new URL("../icons/reopen_window-fill.svg?v=dfef0717c741393964def39ddd4f3b517401469b343bec0ddbfe780ada188c16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
