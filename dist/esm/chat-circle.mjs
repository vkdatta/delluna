export const name="chat-circle";
export const id="dl_14943cd1570143c69c64";
export const url=new URL("../icons/chat-circle.svg?v=0ecbbc0ef1885a18bc6c0d7b63603ab3336afbd9e7965c12c64c3c30351bd5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
