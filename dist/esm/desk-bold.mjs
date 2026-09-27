export const name="desk-bold";
export const id="dl_861507f2856e4b70b807";
export const url=new URL("../icons/desk-bold.svg?v=ded7485708c52210e04510a51dfd473b98d09377806b489a6bf7e1958b9d4923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
