export const name="magic-wand-duotone";
export const id="dl_146c05e2923f4521b65c";
export const url=new URL("../icons/magic-wand-duotone.svg?v=923eaa6b49c427a640c2fc6e1bd0bc36686adbbff28672b4f8c10f48415d3397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
