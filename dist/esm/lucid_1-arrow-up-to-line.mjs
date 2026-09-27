export const name="lucid_1-arrow-up-to-line";
export const id="dl_869a023526744bf48fe9";
export const url=new URL("../icons/lucid_1-arrow-up-to-line.svg?v=0a4006c5ba84b001bf068ab8606064b35a18c543aad46a84b73f457db13d6bd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
