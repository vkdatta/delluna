export const name="sphere-duotone";
export const id="dl_4f1fee57fa3222e43b43";
export const url=new URL("../icons/sphere-duotone.svg?v=cda900547c52a384ca2daba31e80f404e065ec26a91cb7a662abd474edaa8feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
