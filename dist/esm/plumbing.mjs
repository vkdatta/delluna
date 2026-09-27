export const name="plumbing";
export const id="dl_637c1aed80cafc43c3f3";
export const url=new URL("../icons/plumbing.svg?v=dc6a53ed266c75de74d2975ec76a3f131adc5716f4932ad2561069cb51be70dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
