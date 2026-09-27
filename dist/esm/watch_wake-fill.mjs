export const name="watch_wake-fill";
export const id="dl_92fdb6ecd643b85d8261";
export const url=new URL("../icons/watch_wake-fill.svg?v=e22768dab67db69433ff7c7beda64c3dfb6d03626f87eebb075b6fe310c7aedf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
