export const name="train-simple-thin";
export const id="dl_d96e7c1ac6c1a946227e";
export const url=new URL("../icons/train-simple-thin.svg?v=35c9bc1ea9e1cbaf9ae381b0ac0e47bc11cddf3c153b3f91f87e856d008787ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
