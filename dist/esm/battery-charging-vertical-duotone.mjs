export const name="battery-charging-vertical-duotone";
export const id="dl_9aaedce1a5e443ae94c9";
export const url=new URL("../icons/battery-charging-vertical-duotone.svg?v=438c6db7d3d628de8aea9121ce3b821e427013755da67f412f6afee2dfdb77ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
