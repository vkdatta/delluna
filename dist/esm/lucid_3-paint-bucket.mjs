export const name="lucid_3-paint-bucket";
export const id="dl_af9c4b62b462423b8feb";
export const url=new URL("../icons/lucid_3-paint-bucket.svg?v=1dce339e29df6928957b06a905f6f97faf362e174f2c030e077cf90e331b32d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
