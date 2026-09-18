export const name="blur_short-fill";
export const id="dl_7e3ea9c9e9ac41e28fea";
export const url=new URL("../icons/blur_short-fill.svg?v=76a8ed7636cbdb88b4b159a359d75ff4731df1824fb2bd878496c7079549ea85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
