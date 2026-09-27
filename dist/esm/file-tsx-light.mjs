export const name="file-tsx-light";
export const id="dl_8c33f5bb360443bba181";
export const url=new URL("../icons/file-tsx-light.svg?v=0d37f21bc208ad84a0c6cb64afc62bac536ec2d0c6ba23f4e371ae50832030a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
