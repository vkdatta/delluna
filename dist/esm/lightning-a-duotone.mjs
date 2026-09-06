export const name="lightning-a-duotone";
export const id="dl_a942935e330a43f88601";
export const url=new URL("../icons/lightning-a-duotone.svg?v=40542047dae735beffbe8e16ee6d52e6adbfe34eb7f53748c611e430b90a6e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
