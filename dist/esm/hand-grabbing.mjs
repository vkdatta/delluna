export const name="hand-grabbing";
export const id="dl_0c54039f560a4327ac5f";
export const url=new URL("../icons/hand-grabbing.svg?v=54b0b75f8a8ffa256a36485b20377a2e712efb1ec2981d4766bc0f697c7f02c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
