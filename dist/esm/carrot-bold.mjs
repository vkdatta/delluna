export const name="carrot-bold";
export const id="dl_9a98167496254b669bfa";
export const url=new URL("../icons/carrot-bold.svg?v=f884d4c8b0bd90f695d70f329fda17ca0de2fac05fa0b2d9aba5ecd0e6ec1d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
