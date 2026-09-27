export const name="stop-circle-light";
export const id="dl_ad93c791649739c318cd";
export const url=new URL("../icons/stop-circle-light.svg?v=eff1a0638c3a6545c2d2a3764cf178acdeacc8ccb9e5d28bb8a2eef19e0e4ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
