export const name="check-fill";
export const id="dl_1815e1ca3754726bdde0";
export const url=new URL("../icons/check-fill.svg?v=030b033a453385886841b84334defa1ae8542121eef8ff45485131ce6b88dc1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
