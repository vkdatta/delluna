export const name="lucid_2-house-plug";
export const id="dl_6afc69ce5ce74f71bb2b";
export const url=new URL("../icons/lucid_2-house-plug.svg?v=44b0809b1091152d1fd537d843b9298637826b67030b3b361d238c3377ae1e07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
