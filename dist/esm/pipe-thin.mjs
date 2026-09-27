export const name="pipe-thin";
export const id="dl_18f9767805a74f17b85d";
export const url=new URL("../icons/pipe-thin.svg?v=b3014bd28c0ca59c2d9cf9aee174c938b6bb7142aa9dd9b55a69d62bdef631fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
