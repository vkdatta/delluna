export const name="trees";
export const id="dl_be6bf339c27e48288952";
export const url=new URL("../icons/trees.svg?v=60c06c15ab46fc054a9976d15b6b6879d96f585d42f3344873a91a4103d64e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
