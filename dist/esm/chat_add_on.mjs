export const name="chat_add_on";
export const id="dl_bba300079ef0429c8fda";
export const url=new URL("../icons/C/chat_add_on.svg?v=648e308f181b1f24d46549d0c4064ddbeaae73949231d84930d26136b777a334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
