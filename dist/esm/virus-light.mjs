export const name="virus-light";
export const id="dl_4473cf2492ccf34e17c7";
export const url=new URL("../icons/virus-light.svg?v=97286cc54ff694f3f495672c509d6f06f38d60fac4ce6f8b7a09a0911cb66cc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
