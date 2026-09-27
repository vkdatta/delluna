export const name="text-h-six-thin";
export const id="dl_526ce48eb4d897b670f1";
export const url=new URL("../icons/text-h-six-thin.svg?v=082738c7fa2908165ec48a58c97310a56faa278cd2c3b538bd710eba9bddbf2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
