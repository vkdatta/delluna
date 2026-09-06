export const name="arrow-elbow-up-right-duotone";
export const id="dl_4a0e2d4bf3374efe9cb5";
export const url=new URL("../icons/arrow-elbow-up-right-duotone.svg?v=ab2b49d1c6d6d1ece39fcc046152973ce8073ec384b5af618c368dea69add598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
