export const name="speedometer-light";
export const id="dl_354c1fcd4cf5564890d5";
export const url=new URL("../icons/speedometer-light.svg?v=b22cc5f220ca9b10b5d79b1a04a0fa68189dbbee071bdef361ee2c2ef64857a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
