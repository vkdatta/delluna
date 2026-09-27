export const name="lucid_3-rabbit";
export const id="dl_4483d0b073cf4174bf78";
export const url=new URL("../icons/lucid_3-rabbit.svg?v=3857511f9362e55dc9ccebe0d13606c54540b77ab401cb3abc130ba438c502b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
