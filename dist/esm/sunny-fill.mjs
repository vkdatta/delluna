export const name="sunny-fill";
export const id="dl_ae9dd8db3f2d4574b1da";
export const url=new URL("../icons/sunny-fill.svg?v=48966ee03e6dbb711a209b2cb6283530f29ac0d045d31ecf97fe4adc179dddb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
