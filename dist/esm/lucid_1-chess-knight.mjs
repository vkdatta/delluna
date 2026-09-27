export const name="lucid_1-chess-knight";
export const id="dl_f221f5322643448898d6";
export const url=new URL("../icons/lucid_1-chess-knight.svg?v=5b03964020fa0065d435d381c6a69ac04332b0c3b73f165e9eae7c3c44ef5dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
