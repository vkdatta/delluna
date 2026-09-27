export const name="square-duotone";
export const id="dl_a8eb385b09f0f589da8d";
export const url=new URL("../icons/square-duotone.svg?v=784e3b23a39fbb03493ec99b9327518a42e1a96c625e2581a45497b1b8022448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
