export const name="chats";
export const id="dl_e0403547e73b42038a70";
export const url=new URL("../icons/chats.svg?v=ed5e48e5b5506eb7231701e29fb17a20bf736dbf37cad4f843d1f69d6d7c19ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
