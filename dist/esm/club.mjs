export const name="club";
export const id="dl_371c2382843640eda245";
export const url=new URL("../icons/club.svg?v=c1a49d76c08f7f2e8ccd099bb08e1ddb55756992ff24624e832df06aa372dc60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
