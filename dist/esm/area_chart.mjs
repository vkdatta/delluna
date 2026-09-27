export const name="area_chart";
export const id="dl_113a3d4b5f705bcf00cd";
export const url=new URL("../icons/area_chart.svg?v=fff3164d9abd54ed3a28ed205248b2c853be2cb94aad16ab01c180bcaeccbcf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
