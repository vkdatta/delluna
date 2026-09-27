export const name="chat-teardrop-text-fill";
export const id="dl_33bbe8bf926149c4a170";
export const url=new URL("../icons/chat-teardrop-text-fill.svg?v=7293fdfbf12c92c24e548003e4084ddcb416d93ee6c1b8acd8fb56e938807a5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
