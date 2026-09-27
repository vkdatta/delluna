export const name="wheelchair-motion-bold";
export const id="dl_1377ef552673107f213e";
export const url=new URL("../icons/wheelchair-motion-bold.svg?v=6e9cb86d8bace281d6ca28fd4287988900241e00e5b1e9a15476c53b0f9a6860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
