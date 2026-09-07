export const name="align-top";
export const id="dl_7255c99874c54985bd58";
export const url=new URL("../icons/align-top.svg?v=4fbaeb924b02da8b423747c502786fa50ec31e110994931bfb17399c758984dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
