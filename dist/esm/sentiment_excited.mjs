export const name="sentiment_excited";
export const id="dl_c2f41ebe48f2fdf8219a";
export const url=new URL("../icons/sentiment_excited.svg?v=7567e08f22f56524b44c95b644c2a8cb314027b01af7cdf4cfd5a22d8020c388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
