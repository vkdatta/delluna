export const name="push-pin-simple-thin";
export const id="dl_68106e9319bd4ceb8057";
export const url=new URL("../icons/push-pin-simple-thin.svg?v=d6f9ae6ad600cb0e1a822b1e37f5aacdf1db3a593c7afc623ac8935bc903bb17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
