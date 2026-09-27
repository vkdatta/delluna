export const name="folder-simple-lock-thin";
export const id="dl_a2daf7beb08144b48c6a";
export const url=new URL("../icons/folder-simple-lock-thin.svg?v=1930ca891d5ed06ccf8902e8f12ddb0e6393722a81219936a090baca893a13de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
