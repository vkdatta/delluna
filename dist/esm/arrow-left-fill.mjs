export const name="arrow-left-fill";
export const id="dl_52c54e2fc5d94c85b264";
export const url=new URL("../icons/arrow-left-fill.svg?v=48b6e88e4e672756483802bff079633d7bc6ddc38d5fca19591c99d91da53572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
