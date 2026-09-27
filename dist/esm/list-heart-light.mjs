export const name="list-heart-light";
export const id="dl_8b17967d10df4972901a";
export const url=new URL("../icons/list-heart-light.svg?v=13ac853be06205b8fb5dbef70bd78de5765fe91d759f45f8b1a6a4695c007558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
