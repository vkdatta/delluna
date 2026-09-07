export const name="lucid_3-message-square-more";
export const id="dl_66ae719ede0c4cfe859b";
export const url=new URL("../icons/lucid_3-message-square-more.svg?v=36a0055fe44f12583f12861e15f50de42685fb01b1d1f5cf91a11b092b3d309c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
