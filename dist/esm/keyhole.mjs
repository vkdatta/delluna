export const name="keyhole";
export const id="dl_2aa6f2f330c94fd1af63";
export const url=new URL("../icons/keyhole.svg?v=68adf5e6fb946b0e90407c5930e5666677f9948f18bcf520a054171030094d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
