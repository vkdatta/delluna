export const name="folder_match-fill";
export const id="dl_255c541ee5381cd8edb3";
export const url=new URL("../icons/folder_match-fill.svg?v=5d66951341e21119b636d2479539dd0d9033b63b7a5121a2d31a2cbbd8fcb5ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
