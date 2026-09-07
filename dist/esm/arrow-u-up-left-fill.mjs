export const name="arrow-u-up-left-fill";
export const id="dl_58d0b9de28eb494a96ca";
export const url=new URL("../icons/arrow-u-up-left-fill.svg?v=f9e8890a04c24f2f973e7ff3f764bae79df60056d654e987da351618a9cabfc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
