export const name="arrow-elbow-right-light";
export const id="dl_37aac7f8cb8c427aab49";
export const url=new URL("../icons/arrow-elbow-right-light.svg?v=e6dd4b593070be417dd929d4de0302e167a4ab1dbe047f59d50900e260d926c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
