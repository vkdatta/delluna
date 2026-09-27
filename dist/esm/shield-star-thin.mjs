export const name="shield-star-thin";
export const id="dl_ace7cc8dcf9526fa5601";
export const url=new URL("../icons/shield-star-thin.svg?v=d98621705ce934589ced04a5d2d79ac7dec9e81ebc4b8d023f480716f770e86c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
