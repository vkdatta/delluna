export const name="arrow-fat-line-up-light";
export const id="dl_7b9e78e4fdb54f0581af";
export const url=new URL("../icons/arrow-fat-line-up-light.svg?v=cb0c01c86262c949f1bb1ddd29b4b0e2b244e13302fe40a0a74dd94282c7a8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
