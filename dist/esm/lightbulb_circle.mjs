export const name="lightbulb_circle";
export const id="dl_d314a6290cd3c58a969c";
export const url=new URL("../icons/lightbulb_circle.svg?v=4d5f8782fe9e6e0e94b9139e59312f29e99896dfd13f7c64a3eec60358d10d99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
