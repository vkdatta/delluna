export const name="file-minus-thin";
export const id="dl_3233285909ea4862b55c";
export const url=new URL("../icons/file-minus-thin.svg?v=49781d208f6f1dff3571f8aa45da1db3e13b453a938fb920031ef4755c10a7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
