export const name="sports_soccer";
export const id="dl_a690abc2c88190559f89";
export const url=new URL("../icons/sports_soccer.svg?v=24404be2892c5d2b8f900910c2fc9e6d549bb6f6c4198a78a983647f2c2b92f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
