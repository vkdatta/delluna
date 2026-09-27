export const name="endocrinology-fill";
export const id="dl_d8df5a897c0dcaeb8e6f";
export const url=new URL("../icons/endocrinology-fill.svg?v=6dcb70213e3303cd451698cfe3ac8cac9f20ea6ed61c60a9ac68702cfffb6119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
