export const name="watch_button_press";
export const id="dl_b7d1243a2d8f48a7a251";
export const url=new URL("../icons/W/watch_button_press.svg?v=4081795cd8f7d10402229c40f9c5490ae656703c29de5311fa3a8d8ffc5c5c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
