export const name="mouse-light";
export const id="dl_7edebc1741654673951b";
export const url=new URL("../icons/mouse-light.svg?v=23d5354799ef275bce38923e8f84108a55463b328c1f7cec177c6d39ef2c4ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
