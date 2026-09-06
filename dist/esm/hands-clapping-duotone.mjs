export const name="hands-clapping-duotone";
export const id="dl_3c6c2b3f78c7424e8540";
export const url=new URL("../icons/hands-clapping-duotone.svg?v=ec06f6fd5f5b8800cf1e12961259ad81ae1693712759c978cc66c3e35bb9c9ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
