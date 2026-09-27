export const name="racquet-light";
export const id="dl_07e36bd858de4ff79346";
export const url=new URL("../icons/racquet-light.svg?v=1f448adf18a3ea012aabf0c1d30c99e57468225d55fb1d8f62d6a197bc3b9edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
