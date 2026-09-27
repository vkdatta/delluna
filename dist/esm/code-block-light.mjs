export const name="code-block-light";
export const id="dl_0c51f857ad934e2c9230";
export const url=new URL("../icons/code-block-light.svg?v=5349f3f05958d37296d7a255237b27228249a92b42f606b8eb11d311363da47a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
