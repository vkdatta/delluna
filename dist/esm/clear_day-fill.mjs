export const name="clear_day-fill";
export const id="dl_9917c1a6ea4a4c769af7";
export const url=new URL("../icons/C/clear_day-fill.svg?v=48966ee03e6dbb711a209b2cb6283530f29ac0d045d31ecf97fe4adc179dddb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
