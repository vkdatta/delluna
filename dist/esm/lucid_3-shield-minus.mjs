export const name="lucid_3-shield-minus";
export const id="dl_e71b9d685ade479b823b";
export const url=new URL("../icons/lucid_3-shield-minus.svg?v=e521c341f5425daf9fc6516bd199bf30360fa8a816b667913b8b63825f99e488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
