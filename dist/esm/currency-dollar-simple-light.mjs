export const name="currency-dollar-simple-light";
export const id="dl_46e1184511c044dcb171";
export const url=new URL("../icons/currency-dollar-simple-light.svg?v=ec151b6308270b9c96d74c8167e030b564aa28df78266bada3914bb2ba711b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
