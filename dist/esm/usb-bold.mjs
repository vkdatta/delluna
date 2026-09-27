export const name="usb-bold";
export const id="dl_d9ad1b822aa5eb70b814";
export const url=new URL("../icons/usb-bold.svg?v=5d289dc4b058b4b40285dfe70ddc87c0b679f5b6dc6803ed975b6116cd0217da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
