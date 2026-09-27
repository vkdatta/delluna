export const name="yarn-light";
export const id="dl_9f0de8c6f159177841ee";
export const url=new URL("../icons/yarn-light.svg?v=b825cfe1bb251c7693a840fe961b78a4f042ae4c2b5af3ff3b8443e303ec4966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
