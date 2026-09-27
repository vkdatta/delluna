export const name="slack-logo";
export const id="dl_b3290dcc7039e2c2dfc4";
export const url=new URL("../icons/slack-logo.svg?v=9f7ca14e14d1dee4f2835f6eda53f802829a73a9318a0e569d76048d480121d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
