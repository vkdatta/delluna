export const name="trolley-suitcase-thin";
export const id="dl_dfc6fff9b51c69ecd57f";
export const url=new URL("../icons/trolley-suitcase-thin.svg?v=e18fc2d36d6618beea997fd7deaf7ac3db88754ed08e76d2a46017d5683928fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
