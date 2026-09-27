export const name="rubric";
export const id="dl_4f8f45061037a593e34a";
export const url=new URL("../icons/rubric.svg?v=bb361ca1d1a222189946f6959975647944e0c7e5bfb23a6e046c6a58fb19018a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
