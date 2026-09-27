export const name="agriculture-fill";
export const id="dl_ae2d0476ac9f164a97d8";
export const url=new URL("../icons/agriculture-fill.svg?v=72a046e59263358e35f03aad3b67abb88d40eb8669a98c100063161120106f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
