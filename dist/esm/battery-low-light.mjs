export const name="battery-low-light";
export const id="dl_a6bde4646f1a4de298dc";
export const url=new URL("../icons/battery-low-light.svg?v=dd5327c9d46a6928e070004051b5d5a5f65db7ffdde8607eff7d26b66b248944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
