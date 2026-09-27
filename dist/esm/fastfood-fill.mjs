export const name="fastfood-fill";
export const id="dl_cc8093a60f36df688622";
export const url=new URL("../icons/fastfood-fill.svg?v=f5b4bbcd59e45bc1d1d8b55723802c277d737e9a5ae6c55b0242abe49a37c5c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
