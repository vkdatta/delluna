export const name="trackpad_input_3";
export const id="dl_18678ffcf21259c11848";
export const url=new URL("../icons/trackpad_input_3.svg?v=0424872b15dfe920fe1728342712462f3d857b8351e5b0e4dc7cffdec0d08d3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
