export const name="pen_size_1-fill";
export const id="dl_ddc083502e44ca43aa43";
export const url=new URL("../icons/pen_size_1-fill.svg?v=3e6ebe8d08223f55b695390ef252df878e25fed389a4ae29b6745b0ebd65d834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
