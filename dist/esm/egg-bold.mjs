export const name="egg-bold";
export const id="dl_36dbf2ca2d014fb89b4a";
export const url=new URL("../icons/egg-bold.svg?v=6d2be505a47a08a9e60a2767b8f6a80a3f1d25a07d62b1e5b46ce33f1c9f7586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
