export const name="door-open-fill";
export const id="dl_104e8efefd0a41418cb0";
export const url=new URL("../icons/door-open-fill.svg?v=a31fe4e9610c22b14187accdca900a52497e58e367fa6ae90693f4122337ce9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
