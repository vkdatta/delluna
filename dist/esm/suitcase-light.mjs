export const name="suitcase-light";
export const id="dl_d84456d643c1dc1c439a";
export const url=new URL("../icons/suitcase-light.svg?v=c62b008534ee7add0b85d536a5179c4f9551e560b901385f5143ec202e1fcee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
