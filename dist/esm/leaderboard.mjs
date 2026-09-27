export const name="leaderboard";
export const id="dl_e704143eae77d893b37a";
export const url=new URL("../icons/leaderboard.svg?v=8dcb3d81a9a9f8bf93a5dde3a2617603bbfcb82d686ebb0bd00cfb4461c3b3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
