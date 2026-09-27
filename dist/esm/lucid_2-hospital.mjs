export const name="lucid_2-hospital";
export const id="dl_6dfea996b55b4fafba07";
export const url=new URL("../icons/lucid_2-hospital.svg?v=25383cb1e50ca0c4ac9e916754d1bc9eb1d494f447774db7b52b4b6f466fc302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
