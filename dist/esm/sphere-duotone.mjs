export const name="sphere-duotone";
export const id="dl_db24979396394cd9bb99";
export const url=new URL("../icons/S/sphere-duotone.svg?v=6c644cc03ea77cdf33c6bd73e9bfc83aa53acb043e5767b572b621a910c5401f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
