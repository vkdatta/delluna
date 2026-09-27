export const name="heart-thin";
export const id="dl_8110df4d8ebb4a128c43";
export const url=new URL("../icons/heart-thin.svg?v=02abef4e2583df31b5cdf8048b8c375871d606cd5baa2128507c7c49a4abc571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
