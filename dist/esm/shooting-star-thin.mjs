export const name="shooting-star-thin";
export const id="dl_3f6fe305bf6a91808402";
export const url=new URL("../icons/shooting-star-thin.svg?v=d849b8ff350941ff8294e9e9af78d0b610b353ebad6fbceed19250513c1d5fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
