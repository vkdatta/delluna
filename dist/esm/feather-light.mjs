export const name="feather-light";
export const id="dl_9eb12dfb08f647189170";
export const url=new URL("../icons/feather-light.svg?v=0a1af6901135cbc47d83223d70e94762aaa3c1fbe3298f52854d2858597a0b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
