export const name="tilde-fill";
export const id="dl_e6ece73ad50d349f4ebd";
export const url=new URL("../icons/tilde-fill.svg?v=4d9353f56be32841daf48b0a3415abf9041f40acd1c6b6c79deb54c1fc1b25ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
