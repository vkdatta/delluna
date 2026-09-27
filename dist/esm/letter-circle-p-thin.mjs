export const name="letter-circle-p-thin";
export const id="dl_fad6f457034d43bd8019";
export const url=new URL("../icons/letter-circle-p-thin.svg?v=9274e4ded5b7b6acfc4ab0460f4f7e7b9eab8f15d6b2d5ac9a43f09947ea5e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
