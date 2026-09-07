export const name="battery-vertical-medium-bold";
export const id="dl_1b83890b7cd442508d38";
export const url=new URL("../icons/battery-vertical-medium-bold.svg?v=37540da68b958bf8ce8f203cd8afe6c94372b844cebbda5c7a54aa53229809ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
