export const name="star-four-thin";
export const id="dl_565bac141552f8da1d4f";
export const url=new URL("../icons/star-four-thin.svg?v=e6b2adabd4c0e7c74e824f17ad2b027082be5ae15d3bfb439e26ef5109f57ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
