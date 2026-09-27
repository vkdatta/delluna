export const name="greater-than-or-equal-thin";
export const id="dl_2d61a82197ab4bb797c2";
export const url=new URL("../icons/greater-than-or-equal-thin.svg?v=1d2fede436b92c6989465d21188a2f8482329fd292790d427acb3cbe56de2471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
