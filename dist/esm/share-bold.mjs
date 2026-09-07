export const name="share-bold";
export const id="dl_4e78b223403544868215";
export const url=new URL("../icons/S/share-bold.svg?v=2828817ce414fe01713b44f60a6442d7635bfabe9fe33def5fa41237dca4e083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
