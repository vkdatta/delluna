export const name="text_ad";
export const id="dl_1496166ef6df7d1e356a";
export const url=new URL("../icons/text_ad.svg?v=87e5aaff3b355170861c169b8d04f1d2c84a893bc320478dfffbd2d82bc6de36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
