export const name="envelope-simple-thin";
export const id="dl_791ecfa437e548abb698";
export const url=new URL("../icons/envelope-simple-thin.svg?v=784f0f91708ba38e5dd76872b2a703569e314d6b04273bbf5784d6dcdf093318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
