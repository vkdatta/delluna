export const name="game-controller-duotone";
export const id="dl_6801c79a2061421997f2";
export const url=new URL("../icons/game-controller-duotone.svg?v=eb6a8239a8b85127313f535ea784629e9e0274e3eaa2b5e43d0710b46e96485e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
