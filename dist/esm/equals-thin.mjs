export const name="equals-thin";
export const id="dl_ad2ffc7089dc4884ada9";
export const url=new URL("../icons/equals-thin.svg?v=5316e6a31262dc262b94e92ddeec76a4f19743a17f34d6973e3f72e064291c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
