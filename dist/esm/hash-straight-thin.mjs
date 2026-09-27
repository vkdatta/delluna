export const name="hash-straight-thin";
export const id="dl_bfb5324fec7046eca826";
export const url=new URL("../icons/hash-straight-thin.svg?v=33be6d7a353188586cbecb5f599654f2e655677e04c6c085c9d3ee81c186d594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
