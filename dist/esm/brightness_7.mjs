export const name="brightness_7";
export const id="dl_01e682a19af24a869fd9";
export const url=new URL("../icons/brightness_7.svg?v=14b5270fff4d0cecd5304df145dc2763155edf4e96279d00811484b4c080d10c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
