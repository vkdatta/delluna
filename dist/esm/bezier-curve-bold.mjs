export const name="bezier-curve-bold";
export const id="dl_d5b0f38a8b9846878087";
export const url=new URL("../icons/bezier-curve-bold.svg?v=b808b00e9dd0bb9342c071dd0dc93e0564ac71cfde2be1b5bd613f02314c7a3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
