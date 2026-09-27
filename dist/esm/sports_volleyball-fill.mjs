export const name="sports_volleyball-fill";
export const id="dl_872fc2ba942e43f1816d";
export const url=new URL("../icons/sports_volleyball-fill.svg?v=a55cc0164576ca69381c22bfb319025bb3640b86b613fee5f21daea6ba4009de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
