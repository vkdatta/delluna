export const name="target-thin";
export const id="dl_62dc3348425f1a32d828";
export const url=new URL("../icons/target-thin.svg?v=cda2ab09d6ecfeb1fc54d1c89ba2e1cb2e4b794183ad1240b7d43f0f299d0999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
