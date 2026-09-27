export const name="folder-lock-thin";
export const id="dl_140f8545aa5048c79c8b";
export const url=new URL("../icons/folder-lock-thin.svg?v=9cb271bb8b38a39bccc34c5afed43bc981a518881ebd67945a91ea1bc3817683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
