export const name="arrow-bend-up-right-thin";
export const id="dl_4937b10a768c47fd8fc6";
export const url=new URL("../icons/arrow-bend-up-right-thin.svg?v=f0508fae5e6b1f650cebccbcf25191c4f2438cf31007eef5b1be584e5c8f2bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
