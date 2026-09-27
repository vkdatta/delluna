export const name="drop-simple-fill";
export const id="dl_c4fe71fcafa548c99ade";
export const url=new URL("../icons/drop-simple-fill.svg?v=ea6cd2e748b64e484a5dbc32289115d6ef0693f14469d985fe6b90da9f88a404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
