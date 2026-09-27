export const name="sports_rugby";
export const id="dl_87fadd86f95ac1563f83";
export const url=new URL("../icons/sports_rugby.svg?v=39103cfbf334929581fe422bf776cec2af7be243d993339236785946b7809d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
