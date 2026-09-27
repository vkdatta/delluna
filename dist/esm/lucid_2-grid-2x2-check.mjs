export const name="lucid_2-grid-2x2-check";
export const id="dl_aec91f53ecf74648b9ea";
export const url=new URL("../icons/lucid_2-grid-2x2-check.svg?v=b4782666b08a71adf84c506958796d0c9678ca0e22ee48e53c66f2688d039968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
