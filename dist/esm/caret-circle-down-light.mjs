export const name="caret-circle-down-light";
export const id="dl_e81311ba1b374b05aa59";
export const url=new URL("../icons/caret-circle-down-light.svg?v=ab2b2e788e44af8476d89e5b395384193152dab2cf80b96bfc1363e909a8124a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
