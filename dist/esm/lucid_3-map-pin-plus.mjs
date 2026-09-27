export const name="lucid_3-map-pin-plus";
export const id="dl_7b61de1038c547e599b3";
export const url=new URL("../icons/lucid_3-map-pin-plus.svg?v=d9bb3dc1a9b31249ccd97172cfabe82693038a731501cde5b98eddff1dcd256e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
