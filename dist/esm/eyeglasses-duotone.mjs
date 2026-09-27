export const name="eyeglasses-duotone";
export const id="dl_0c95e5b8efb143109a96";
export const url=new URL("../icons/eyeglasses-duotone.svg?v=41cedef2eb4b050f6115179c55d5e275e4bd73959171debf6b06e6d8413d881d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
