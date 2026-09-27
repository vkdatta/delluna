export const name="step_out-fill";
export const id="dl_2cd52e19845a7b30af3c";
export const url=new URL("../icons/step_out-fill.svg?v=73fa0e0eefeb3f663397d11aaaef721776a8c40a807f56b340caa1adf7b8c1c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
