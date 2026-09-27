export const name="file-css-thin";
export const id="dl_cd1d03a2c4b042ebaac4";
export const url=new URL("../icons/file-css-thin.svg?v=9368dfe98e7268cfe507b5b95c04dcae46ed11e25c282a6297146106535570de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
