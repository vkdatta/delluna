export const name="traffic-sign-light";
export const id="dl_9cb53c753c44970dcea7";
export const url=new URL("../icons/traffic-sign-light.svg?v=4eec76dcd2b4d42aaee7c1c1ceaea1727b8e8b44f14484ce6a04447983235ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
