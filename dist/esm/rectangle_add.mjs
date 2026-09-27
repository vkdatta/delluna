export const name="rectangle_add";
export const id="dl_400863c4faa886620ddb";
export const url=new URL("../icons/rectangle_add.svg?v=370d99f35a01a4f8ee0a9b55c150f5dadd1d8706d75177efe57601eb6c47bbf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
