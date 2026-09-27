export const name="battery-warning-vertical-light";
export const id="dl_4a05a395f39840bcb445";
export const url=new URL("../icons/battery-warning-vertical-light.svg?v=16312227a41749061bf665a50b5bb9f6b93830561f537276a0d6d607634d6fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
