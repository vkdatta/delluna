export const name="arrows-split-thin";
export const id="dl_c58ccc58b3be4471846c";
export const url=new URL("../icons/arrows-split-thin.svg?v=9a2d65be2e6304dee5ff73c3d56cad5352f9f3111b1edf3b0144947155d9e381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
