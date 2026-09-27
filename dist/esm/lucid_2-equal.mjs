export const name="lucid_2-equal";
export const id="dl_bfcc1008268c4eaeb053";
export const url=new URL("../icons/lucid_2-equal.svg?v=9d4169bb069cb8e9735abe59146d6708271c8f35333bfd9ce7c830465051b01d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
