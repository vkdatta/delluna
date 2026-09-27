export const name="hand-swipe-right-fill";
export const id="dl_28a218de52144794b925";
export const url=new URL("../icons/hand-swipe-right-fill.svg?v=e4c52b0b269eba2d274449bda0f86a81a308e659c4850713dcfe95fc7e1dd411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
