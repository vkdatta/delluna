export const name="amazon-logo-fill";
export const id="dl_11f04a49cfaf4215b900";
export const url=new URL("../icons/amazon-logo-fill.svg?v=96d475f1eaed1733e9c6dcae74b52900be7e399b128917a8f50d89d773041491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
