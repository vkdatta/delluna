export const name="check-square-thin";
export const id="dl_551637fc203e49e6b8f8";
export const url=new URL("../icons/check-square-thin.svg?v=2cb426863f95c2c5515f4479ebd78d116cba0139ae27598a9dccf2a4c05047c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
