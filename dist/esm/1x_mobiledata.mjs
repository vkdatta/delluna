export const name="1x_mobiledata";
export const id="dl_9e7edbce74e94c658c8a";
export const url=new URL("../icons/1/1x_mobiledata.svg?v=3b47d70ca5f32cc749a12a9419aa3bd250f2bf4b6acd0b9782a6365f48c019e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
