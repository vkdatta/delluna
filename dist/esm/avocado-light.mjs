export const name="avocado-light";
export const id="dl_97b43e7b4b984b85b4ab";
export const url=new URL("../icons/avocado-light.svg?v=f5ae85224f6f7f4dcde3c5a356f28601e10daf9f6984fb602e9056dab2dd254f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
