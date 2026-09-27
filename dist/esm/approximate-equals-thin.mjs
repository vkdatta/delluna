export const name="approximate-equals-thin";
export const id="dl_0d2522487d124d5ebd3f";
export const url=new URL("../icons/approximate-equals-thin.svg?v=adb190b807e27bd85b7a4ba5f4d32ea44bbb94311e7045f818c478e1a9c051fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
