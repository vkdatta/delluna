export const name="dot-outline-thin";
export const id="dl_528d30d32ea84ebf9898";
export const url=new URL("../icons/dot-outline-thin.svg?v=447b4ace9a904ee65cf7147c9f7f0e11780ecbccd8126d1b59c4fa3ccbcd0989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
