export const name="arrow-bend-up-right-thin";
export const id="dl_4937b10a768c47fd8fc6";
export const url=new URL("../icons/arrow-bend-up-right-thin.svg?v=a56a2c3a6122fc856bfe4a2004b189eca097497e151bc0de48d6461f7f7c5093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
