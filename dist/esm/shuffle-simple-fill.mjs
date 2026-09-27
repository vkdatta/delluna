export const name="shuffle-simple-fill";
export const id="dl_9050d6a2039706c55d8e";
export const url=new URL("../icons/shuffle-simple-fill.svg?v=9e0049638d30f1ce0b4050647b76c44aab63a9f03189c739460707fe691dc59f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
