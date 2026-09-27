export const name="fan-bold";
export const id="dl_ba43e8609093467ebf1e";
export const url=new URL("../icons/fan-bold.svg?v=26c442c9ec47d823c52001173b81609c5056970284ad836a8ce9bb56e801e04c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
