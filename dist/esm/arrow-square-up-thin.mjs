export const name="arrow-square-up-thin";
export const id="dl_d46f36ca8dea4a23a86e";
export const url=new URL("../icons/arrow-square-up-thin.svg?v=fba36c285c0a744494e3fd3a11380baab614f786d203fe08eb586f557a05a492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
