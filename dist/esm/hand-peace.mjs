export const name="hand-peace";
export const id="dl_30bfaebbe5aa4ac3baa4";
export const url=new URL("../icons/hand-peace.svg?v=7adc850f88a68b53489d9dafcc4ddbf9551b87377d4f5fe8e27b99d16ff45685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
