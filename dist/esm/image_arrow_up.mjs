export const name="image_arrow_up";
export const id="dl_b2d05c438c4897ce6532";
export const url=new URL("../icons/image_arrow_up.svg?v=8a397d6e702efeda14de3f957424102ec2f1fe8155c13371b8e9eccf8145a8dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
