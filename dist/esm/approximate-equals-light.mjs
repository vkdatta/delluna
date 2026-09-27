export const name="approximate-equals-light";
export const id="dl_674f4b1942f74308b0c9";
export const url=new URL("../icons/approximate-equals-light.svg?v=456381e66698681b54e58c2fc15c73cc8cb8675790f9e729fb2379e6df99eca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
