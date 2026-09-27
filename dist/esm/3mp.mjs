export const name="3mp";
export const id="dl_c595aa95a8e76c9fd70c";
export const url=new URL("../icons/3mp.svg?v=183b0ba0106de67fb771055141303474050296e7c324f22596530253770413af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
