export const name="network_locked-fill";
export const id="dl_b2508bea61474e449b88";
export const url=new URL("../icons/network_locked-fill.svg?v=56a74391e3e7acf50515bea2e4db4efcdfe4ca96fb6c009ed121bb8ad8491b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
