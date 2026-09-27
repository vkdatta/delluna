export const name="train-simple-bold";
export const id="dl_9e4271e3087aa4c33ea5";
export const url=new URL("../icons/train-simple-bold.svg?v=51f6e3b35471b2bcb2fa8736c4bea0b3f43c974be7001ffa0d80ef7c85eff7c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
