export const name="arrow_circle_up";
export const id="dl_63342d1a5a7e8fc98b87";
export const url=new URL("../icons/arrow_circle_up.svg?v=0dacede2cc7fbf0bd6fd57029086d2fa867cfebd6475fb9718c466a6a00f4889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
