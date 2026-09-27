export const name="hand-arrow-up-light";
export const id="dl_4014cfbce52d494995ff";
export const url=new URL("../icons/hand-arrow-up-light.svg?v=bdc0d9fee51ea1861d4dee1e470f8f25ef1254a29a1b5a92326278a83892b453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
