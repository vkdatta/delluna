export const name="lucid_1-ad";
export const id="dl_5e99f4d039b64157825c";
export const url=new URL("../icons/lucid_1-ad.svg?v=02e7a97f9ab87cea97567b309ed56fcdcc9ca67600f79ec2d702148183771749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
