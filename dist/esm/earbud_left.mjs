export const name="earbud_left";
export const id="dl_880e66b01868c753d04a";
export const url=new URL("../icons/earbud_left.svg?v=c8b9cd1da0cf660dc48556ffe5cc7c0075efacd42413143bdef05386af1a4448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
