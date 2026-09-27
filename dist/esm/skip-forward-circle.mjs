export const name="skip-forward-circle";
export const id="dl_17876636ebbdf2427aae";
export const url=new URL("../icons/skip-forward-circle.svg?v=8f40d6772e275906078a4a2711b933bb1a2e6ff6b79e6421b348231e643d2616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
