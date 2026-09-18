export const name="splitscreen_landscape";
export const id="dl_9f0c4f98e7274c9fbf8e";
export const url=new URL("../icons/S/splitscreen_landscape.svg?v=a740e8c7927b43cfad709b0dc237ea8a5e7d2a1f1b4ca0a0740e221792223502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
