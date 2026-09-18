export const name="left_panel_close";
export const id="dl_115af21b76124ba38909";
export const url=new URL("../icons/L/left_panel_close.svg?v=aeef850a5471f8948cd4c64dfa0b5b8a238749e48a39ebe8204251bfb34914bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
