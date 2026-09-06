export const name="hand-arrow-up-light";
export const id="dl_4014cfbce52d494995ff";
export const url=new URL("../icons/hand-arrow-up-light.svg?v=c34e853f9d1e8b10e695d5144d33b8ccec0f574bcb9f043875adf5992da67fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
