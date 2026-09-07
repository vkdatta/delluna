export const name="cigarette-slash-duotone";
export const id="dl_f552bbece34446e3ade8";
export const url=new URL("../icons/cigarette-slash-duotone.svg?v=cfc7894d4a1b22fddfa3e6ac7ab26c9ceca3899931765f88abe77baa4c511631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
