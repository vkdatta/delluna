export const name="chat_bubble";
export const id="dl_c85ec73f53bf43d0c1f9";
export const url=new URL("../icons/chat_bubble.svg?v=9e6a984d7d9cdd4b349523d82d96dbe8729e66bca2a9217add7034c61f8c0c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
