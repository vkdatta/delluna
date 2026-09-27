export const name="arrow-arc-left";
export const id="dl_322cfcb0853a4a3380a1";
export const url=new URL("../icons/arrow-arc-left.svg?v=70b130914e6a6e27a50d3c64214042e99d6461e117fcd2d158a78625a6f17288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
