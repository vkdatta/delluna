export const name="filter_9_plus";
export const id="dl_044d572b768bfa7e4645";
export const url=new URL("../icons/filter_9_plus.svg?v=2dde6398c7bc0c7324ce85d1d3c87b31bf79704fc792c57ca2c0d54d331074be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
