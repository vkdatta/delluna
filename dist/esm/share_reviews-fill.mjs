export const name="share_reviews-fill";
export const id="dl_b180c6f18f494b1d2792";
export const url=new URL("../icons/share_reviews-fill.svg?v=c3795c6ba31fd596d53e40f547e83f9d8358cd29eeb342c3f9645e400689f3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
