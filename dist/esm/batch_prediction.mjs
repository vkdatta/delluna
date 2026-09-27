export const name="batch_prediction";
export const id="dl_2ab1d036b2784d80c34e";
export const url=new URL("../icons/batch_prediction.svg?v=963b84021b1bddb8d03ea7adbbb3e475831cf4872384eabfcc5cc85ddd000079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
