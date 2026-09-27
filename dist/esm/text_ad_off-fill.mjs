export const name="text_ad_off-fill";
export const id="dl_31a533ffb35919e261ad";
export const url=new URL("../icons/text_ad_off-fill.svg?v=8ee0d356eea71647e584aec77e2996aa387b8ee1184779498457c929a04437e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
