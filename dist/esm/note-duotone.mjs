export const name="note-duotone";
export const id="dl_1e792129808641cda2eb";
export const url=new URL("../icons/note-duotone.svg?v=e95bd4c4c2144398c68cc9a60c30895e25411e741096925edec402b31221ef83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
