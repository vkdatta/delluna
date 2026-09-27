export const name="tag-x";
export const id="dl_242473bce6e6482aa14f";
export const url=new URL("../icons/tag-x.svg?v=91c0e5689c755fe097c0f407bf51329967d6431fe767e980924c1ccd6f4bffa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
