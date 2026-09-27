export const name="circles-three-duotone";
export const id="dl_861c4fdd567f41808c45";
export const url=new URL("../icons/circles-three-duotone.svg?v=b07d61d047d19a29d94a221dd94e3682f62c4267908276c122106a68c05bd738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
