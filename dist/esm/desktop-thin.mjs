export const name="desktop-thin";
export const id="dl_b013a2bd1406482787ad";
export const url=new URL("../icons/desktop-thin.svg?v=b956c271806122a4f38412003f1f46ffd47e73f3c779d6b1b55b00c16c542c3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
