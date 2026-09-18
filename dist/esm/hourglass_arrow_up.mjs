export const name="hourglass_arrow_up";
export const id="dl_c4c14b51755b4326a25f";
export const url=new URL("../icons/H/hourglass_arrow_up.svg?v=aa23252e6c85fc6e1c0e48a511fb30b6e6778985b4a05507fb9645e60c38c8bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
