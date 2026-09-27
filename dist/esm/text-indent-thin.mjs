export const name="text-indent-thin";
export const id="dl_b20180b2c0b618e24142";
export const url=new URL("../icons/text-indent-thin.svg?v=25682ab3baddc16602940f3ffda7d3bece2875f0a95078e0ac610b71fc4d9980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
