export const name="format_image_front-fill";
export const id="dl_81b8c63aaa276aa1e35e";
export const url=new URL("../icons/format_image_front-fill.svg?v=a75f4a0eb6e0758b29dcf19176d972860f3e061989022f819b4a03972f80008e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
