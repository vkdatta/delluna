export const name="book-fill";
export const id="dl_871e584a57db44398450";
export const url=new URL("../icons/book-fill.svg?v=d4119737f9dcf95794e56d80effacc57a6acb102323f2c40c221fe20cea1c783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
