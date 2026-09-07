export const name="thumbs-up-thin";
export const id="dl_29fa280dd9f54f418be8";
export const url=new URL("../icons/T/thumbs-up-thin.svg?v=2bb153a4d3c56f1b26b6e60bca7380919c4473dce4d16c9b12d1695f5403639b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
