export const name="escalator-up-fill";
export const id="dl_6c1163b777c9441fbb12";
export const url=new URL("../icons/escalator-up-fill.svg?v=9b7b5662c00a1f996131a6406f71fa1e34cb68abe7b8a5d433a870a0304af6cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
