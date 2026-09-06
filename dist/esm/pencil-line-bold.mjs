export const name="pencil-line-bold";
export const id="dl_48c7988711bc4d8b98d7";
export const url=new URL("../icons/pencil-line-bold.svg?v=89e354fa97cb076ba3ab118d9ec0af9948008c2d76e8275ac6c2b1cfe77e858a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
