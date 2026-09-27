export const name="bag-simple-duotone";
export const id="dl_9bb5f4ce08224750b3fd";
export const url=new URL("../icons/bag-simple-duotone.svg?v=01763dce4b763fd3c89657cf512aa2cac3760f34be1f8db5f6eea451e1d44833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
