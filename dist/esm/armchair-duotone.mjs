export const name="armchair-duotone";
export const id="dl_8ca89da9bcde43978a0a";
export const url=new URL("../icons/armchair-duotone.svg?v=49150111cdbb0a77f747f79265462973490e2885b684aff9319cea14bf4f0deb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
