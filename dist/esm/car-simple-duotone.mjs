export const name="car-simple-duotone";
export const id="dl_7cdf00e4c13340809a18";
export const url=new URL("../icons/car-simple-duotone.svg?v=9752d70d250015cb980291ab8b5a993f57bc2aacdb4018199604bb69b1f8d627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
