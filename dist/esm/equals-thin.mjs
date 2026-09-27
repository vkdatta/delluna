export const name="equals-thin";
export const id="dl_ad2ffc7089dc4884ada9";
export const url=new URL("../icons/equals-thin.svg?v=000d4ab957d91cce6e5597c02fad6e249348962450993e251f687d583d4cb10e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
