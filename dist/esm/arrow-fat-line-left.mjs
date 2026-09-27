export const name="arrow-fat-line-left";
export const id="dl_b014db38c77c49ccbc0d";
export const url=new URL("../icons/arrow-fat-line-left.svg?v=0b0beabc5dd760b5fb0ee0ddb95afdc9fc4af42c668677f0720babdcd0fb1736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
