export const name="eyeglasses-bold";
export const id="dl_2f1a705525d4478f9548";
export const url=new URL("../icons/eyeglasses-bold.svg?v=a012a5f34b3691d7b721065bcd58ee6f816001c67be6c735918c4fa3a9c3ebfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
