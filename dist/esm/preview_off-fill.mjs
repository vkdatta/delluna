export const name="preview_off-fill";
export const id="dl_10bd59268d2248a28f54";
export const url=new URL("../icons/preview_off-fill.svg?v=7e53c9c438bc76416b2b461c4790d5593190cba386f9a2e97e467a378034483f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
