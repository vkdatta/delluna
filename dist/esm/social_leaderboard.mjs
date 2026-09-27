export const name="social_leaderboard";
export const id="dl_277b93bc5b89bc49ff53";
export const url=new URL("../icons/social_leaderboard.svg?v=a94c7b0668ec80ef19c348a285f9cebfeaa22ca3d0baa1d7d44f51ff6f36552b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
