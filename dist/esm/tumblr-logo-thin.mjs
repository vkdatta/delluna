export const name="tumblr-logo-thin";
export const id="dl_00c2279d4388b9e8f291";
export const url=new URL("../icons/tumblr-logo-thin.svg?v=ef128aa6d925aac1f4040fa38b43fb51d4637969ad51c1f1a96ce324029ba034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
