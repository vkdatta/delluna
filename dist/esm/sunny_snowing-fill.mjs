export const name="sunny_snowing-fill";
export const id="dl_41f88f5da9f1dceaae24";
export const url=new URL("../icons/sunny_snowing-fill.svg?v=8006a60bbb272b1e94699f26513dd082b87adcf97bce38fd1f84b51542a31f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
