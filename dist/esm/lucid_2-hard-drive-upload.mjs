export const name="lucid_2-hard-drive-upload";
export const id="dl_0b5a2ab91426412990e9";
export const url=new URL("../icons/lucid_2-hard-drive-upload.svg?v=ae58dcaac2ee5f085a941b925159d90ae82b1edaeaaf29029a8b41d93d83d0da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
