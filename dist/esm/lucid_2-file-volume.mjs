export const name="lucid_2-file-volume";
export const id="dl_9d39fa3d4cbf40e784dc";
export const url=new URL("../icons/lucid_2-file-volume.svg?v=bc11ffc34e36914b2221a27200ee3cfd96830ac9cea3485edcec5cb014876088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
