export const name="share-fat";
export const id="dl_5aa200b2b4034c118833";
export const url=new URL("../icons/S/share-fat.svg?v=9c8ba09caecd693aa9c5cd80eeb61af2a9726ade4fefeda34879e82c276f66ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
