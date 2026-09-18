export const name="person_play-fill";
export const id="dl_260992496a344d3383ad";
export const url=new URL("../icons/P/person_play-fill.svg?v=02a37f2c21fd0510e380d65a9f7e268b199a9ab9b64b4a45427f3f29b133116b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
