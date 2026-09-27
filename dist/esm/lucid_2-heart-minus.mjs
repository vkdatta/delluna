export const name="lucid_2-heart-minus";
export const id="dl_52f6ad22ef0b4ec19d0b";
export const url=new URL("../icons/lucid_2-heart-minus.svg?v=60e75d5c8561d80f1ad95fa8c300752629c2480f1600f6f88bb6835c566ebd60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
