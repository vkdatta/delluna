export const name="battery-charging-light";
export const id="dl_b3bc2486b3674648b122";
export const url=new URL("../icons/battery-charging-light.svg?v=ccba72f9810aeefd2bd8ed9c1f3e3afeb61e39c8fc8eb93c6b80d0725a2c0c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
