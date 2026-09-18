export const name="chat_error";
export const id="dl_3c51aa510881441fa3ad";
export const url=new URL("../icons/chat_error.svg?v=a85cea5fdb5e00079c1ae788cb000cc6906963af6d65eeed171aaef50731573b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
