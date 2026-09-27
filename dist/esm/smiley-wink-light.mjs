export const name="smiley-wink-light";
export const id="dl_72d1ed84bc46e1547302";
export const url=new URL("../icons/smiley-wink-light.svg?v=39074484777f0f9d3595723cac69c5f542f60e56a959832ca03df9ecb821b855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
