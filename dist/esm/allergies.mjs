export const name="allergies";
export const id="dl_01e8f983c26c4d948184";
export const url=new URL("../icons/A/allergies.svg?v=65c0c9654cb7dd89bf7789b939e7abf6ddcd28aed5e3fdc01c45569e601f3859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
