export const name="chat_add_on-fill";
export const id="dl_997d0714ae634d22b7be";
export const url=new URL("../icons/C/chat_add_on-fill.svg?v=c27d6af66ebd55494c3f486d152ec7bc04bbffa3f1734ed7d5756fa40c31ae89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
