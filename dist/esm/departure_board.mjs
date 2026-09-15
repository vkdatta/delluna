export const name="departure_board";
export const id="dl_afb826427ff249f5ba53";
export const url=new URL("../icons/D/departure_board.svg?v=a0c041704a6cedf511fccfb8c93872c34f7e91bcd660d89767b6543fb61849fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
