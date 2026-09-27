export const name="handbag-light";
export const id="dl_4ddb8dd263ce4d2e8e54";
export const url=new URL("../icons/handbag-light.svg?v=fd179c92a6eef8ea22043924f508f5662382dff32bf32026bc039d3594485f7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
