export const name="magnifying-glass-minus-thin";
export const id="dl_23ecef32897b48c8b76e";
export const url=new URL("../icons/magnifying-glass-minus-thin.svg?v=35d502b6da3754a05ee7d1ff62929794c904dad845ca1b1286e99d885a81130d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
