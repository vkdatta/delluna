export const name="house-line-duotone";
export const id="dl_b54d4ae6f7bb4cfba143";
export const url=new URL("../icons/house-line-duotone.svg?v=83cc36abb7162857bdd7ad1d3f35e0d26aba8e22d3082621c6f06c3a14e1fd74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
