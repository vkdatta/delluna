export const name="arrow-elbow-right-light";
export const id="dl_37aac7f8cb8c427aab49";
export const url=new URL("../icons/arrow-elbow-right-light.svg?v=5b93565b711c21c0a449ba4bbd1849b94d0a1322f0371c1dfd90ef427264e185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
