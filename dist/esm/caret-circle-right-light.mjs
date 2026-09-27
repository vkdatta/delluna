export const name="caret-circle-right-light";
export const id="dl_43970278ef5e484f939d";
export const url=new URL("../icons/caret-circle-right-light.svg?v=21e945e41807bfa62eeb1f4d94b57cc70da861a805fc704f413fda5860500082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
