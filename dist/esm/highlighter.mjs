export const name="highlighter";
export const id="dl_291f1d30164541df9c95";
export const url=new URL("../icons/highlighter.svg?v=a845539f79ae5c696b46f9a1142fb9180e46bd2098c0912f3b90a4365be9c730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
