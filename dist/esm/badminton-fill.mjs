export const name="badminton-fill";
export const id="dl_11467579aa750c249f8a";
export const url=new URL("../icons/badminton-fill.svg?v=58612543af1b639499dd5b32d1a7ff68763818f7e8fc2cf73c5d87fc0faaf05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
