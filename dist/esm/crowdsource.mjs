export const name="crowdsource";
export const id="dl_84f417ddf341f965e932";
export const url=new URL("../icons/crowdsource.svg?v=5299c65751ebce0b964d3b00585255806dbd735f14360428dc62cb1b170d8cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
