export const name="add_triangle";
export const id="dl_55defd8f5bde10994c14";
export const url=new URL("../icons/add_triangle.svg?v=1ae81a3e39a32ec9e16721e19aa9f0cf1db6aec67e6b2c354c9197859a0ab2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
