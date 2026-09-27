export const name="lucid_3-paw-print";
export const id="dl_f8c34de090684c748f2f";
export const url=new URL("../icons/lucid_3-paw-print.svg?v=d9f0e09b6176150ebf61920d9f3b0d55413b87f08ba30844ccd857fdcb28109f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
