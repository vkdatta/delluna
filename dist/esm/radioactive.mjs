export const name="radioactive";
export const id="dl_9d44402010e941cea5b1";
export const url=new URL("../icons/radioactive.svg?v=cc27a1d57e4d9d801844908e56874a554dd12be6cc23ee3956c43c4326731a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
