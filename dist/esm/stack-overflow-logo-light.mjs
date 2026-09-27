export const name="stack-overflow-logo-light";
export const id="dl_9ec9f66c1169a5727b67";
export const url=new URL("../icons/stack-overflow-logo-light.svg?v=0f1bb42b0a79982ec1f07a612f4218f2fceb9c4bb4388568dcd37553e877129b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
