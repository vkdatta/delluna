export const name="popsicle-thin";
export const id="dl_a2d0be00aae5408989cb";
export const url=new URL("../icons/popsicle-thin.svg?v=ea5de8a38a0f3911308b5d9805790a4e6c4dca5d13533f7712c9182b6d4eaf81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
