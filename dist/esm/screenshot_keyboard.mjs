export const name="screenshot_keyboard";
export const id="dl_f8dfc24dbdbfd3722a03";
export const url=new URL("../icons/screenshot_keyboard.svg?v=713c451642441ec29f8c56d8b0da49f33146c56df34e911d42f4047f1dec51f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
