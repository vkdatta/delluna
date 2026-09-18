export const name="ink_highlighter_off";
export const id="dl_417885822f2741d8844d";
export const url=new URL("../icons/I/ink_highlighter_off.svg?v=29e75e2c30540fc8894ed855703f59d7d91b6b649a88b30b2ed38023619fc285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
