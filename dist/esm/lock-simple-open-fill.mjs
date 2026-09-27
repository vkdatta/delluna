export const name="lock-simple-open-fill";
export const id="dl_850e4796b5d847c0bc0c";
export const url=new URL("../icons/lock-simple-open-fill.svg?v=4b46e41c58a1684ac89b4e8a84e7b0dc156884fe7142aa4fa5506d45b839c85d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
