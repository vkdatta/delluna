export const name="keyboard_hide";
export const id="dl_c08bf0caaf0f8bf103be";
export const url=new URL("../icons/keyboard_hide.svg?v=8ccc863f44465d75c58133ed7fc42adbfc15a5c7a9877c84118ddd81dd9dc0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
