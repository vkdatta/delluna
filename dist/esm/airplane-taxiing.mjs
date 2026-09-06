export const name="airplane-taxiing";
export const id="dl_cee3b9313023404cbdb9";
export const url=new URL("../icons/airplane-taxiing.svg?v=1f2231ac589334955276557845d771342304c7c581934e196b73aca62aaf8ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
