export const name="pencil-line-bold";
export const id="dl_48c7988711bc4d8b98d7";
export const url=new URL("../icons/pencil-line-bold.svg?v=5b1d8d8a92ee8b4c49907e97553050eb7979a6e303b613fe40c87b707b2e30cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
