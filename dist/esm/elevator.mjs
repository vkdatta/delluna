export const name="elevator";
export const id="dl_5a05e9392267e15ba84f";
export const url=new URL("../icons/elevator.svg?v=718c48f27de48f94a7c690b57519df1445d560a6f6a474dc7d0196408878b059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
