export const name="folders-duotone";
export const id="dl_339f0835ee954ac1a055";
export const url=new URL("../icons/folders-duotone.svg?v=ad6fc6c0ebc2d65f41f019331a9539717035ace88644a798f8a7454c79752c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
