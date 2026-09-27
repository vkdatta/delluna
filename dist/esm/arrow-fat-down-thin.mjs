export const name="arrow-fat-down-thin";
export const id="dl_71ea3f4ead084e44a7e2";
export const url=new URL("../icons/arrow-fat-down-thin.svg?v=a55182a1783afc18eddf6c8d91fa233daaa5d8a4168b0b4a112e130b83b119cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
