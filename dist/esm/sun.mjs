export const name="sun";
export const id="dl_d061b9c23bebc9b2b6fa";
export const url=new URL("../icons/sun.svg?v=ed34f06823e5ceccc8491d93750a8ec2e85b7d810afedabb5f0b9a09f4f29795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
