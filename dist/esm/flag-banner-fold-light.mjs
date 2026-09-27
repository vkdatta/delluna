export const name="flag-banner-fold-light";
export const id="dl_ba5bbb86874b4330a4f9";
export const url=new URL("../icons/flag-banner-fold-light.svg?v=1398b151321ac6a30fb04fe575fb0c9aad8f2fbc6b84ae0ca8349d268b988bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
