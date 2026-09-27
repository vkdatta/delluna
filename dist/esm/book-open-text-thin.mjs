export const name="book-open-text-thin";
export const id="dl_75934a76933148e19bf4";
export const url=new URL("../icons/book-open-text-thin.svg?v=c1af371dcf02e4ee5c2a1a3f425a3b0dd11dacdd134825b6c41be02a5e6f8a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
