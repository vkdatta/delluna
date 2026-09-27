export const name="gitlab-logo-bold";
export const id="dl_5672cf95c48240749a16";
export const url=new URL("../icons/gitlab-logo-bold.svg?v=2403b4dc7e12b620d473e7883b6175066783ced3db6f6ec1a180ed2cfec3fc33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
