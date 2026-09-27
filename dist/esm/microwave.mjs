export const name="microwave";
export const id="dl_f0b8aeb6d42bded2f9d3";
export const url=new URL("../icons/microwave.svg?v=91da4b5f7cc37f68872832cb7a443c2c1f6d816242bc87ba1931342b65dedfae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
