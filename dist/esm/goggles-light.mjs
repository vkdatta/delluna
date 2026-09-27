export const name="goggles-light";
export const id="dl_d26dc721b329452bbc5a";
export const url=new URL("../icons/goggles-light.svg?v=0c044490a199b8690a426a01d7015d3c2136ac690be11d1a43ca8aa59c96eec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
