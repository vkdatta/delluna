export const name="spinner-ball-bold";
export const id="dl_6a318a1c9ed0b5cb4743";
export const url=new URL("../icons/spinner-ball-bold.svg?v=8d1f3767c18f3b9d2989c79c49303045c7dcf433b62ead9e416122bd00a08903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
