export const name="asclepius-light";
export const id="dl_7646f1a2c1694a35a427";
export const url=new URL("../icons/asclepius-light.svg?v=b4a44cca31a8bd0c6afb3da596b6dc54e0ad2eddb7330f5e6aa806761f9b6900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
