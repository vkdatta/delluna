export const name="arrow-up-duotone";
export const id="dl_91c1a5741f254cf8af64";
export const url=new URL("../icons/arrow-up-duotone.svg?v=0ce57237b9e2496b31069c2421c8e03c685865a216de60ef215cafe6fa854cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
