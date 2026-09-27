export const name="lucid_2-heart-minus";
export const id="dl_52f6ad22ef0b4ec19d0b";
export const url=new URL("../icons/lucid_2-heart-minus.svg?v=411552f47b805373c93d78841d4144cbb8925fc494abc65085e3264be6cdea31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
