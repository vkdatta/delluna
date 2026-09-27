export const name="number-two-bold";
export const id="dl_2c50277723e943f6b5ad";
export const url=new URL("../icons/number-two-bold.svg?v=4ce4945b0d04e2a7a45c2f014e14a06b44672f9db8846b909c3f533cd49fec9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
