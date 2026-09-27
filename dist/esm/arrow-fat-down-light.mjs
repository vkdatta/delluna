export const name="arrow-fat-down-light";
export const id="dl_b86138603114489e8b9e";
export const url=new URL("../icons/arrow-fat-down-light.svg?v=be88191004b3c7c1abe452962c7ac7d94b3dfba4c2afab4cd809700c51347e26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
