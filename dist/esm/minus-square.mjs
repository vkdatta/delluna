export const name="minus-square";
export const id="dl_2b186086b0b0461abec7";
export const url=new URL("../icons/minus-square.svg?v=2b2ee6733d2b129b7def9c95829ded7d71c4f9cb1097aa62e0d410b9217388c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
