export const name="crop_portrait-fill";
export const id="dl_2ae7add0851f37e82fc2";
export const url=new URL("../icons/crop_portrait-fill.svg?v=f08c0f66ed435511a78164fa9ad35e1f148cd2b07f111bb7f77f648e34a14baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
