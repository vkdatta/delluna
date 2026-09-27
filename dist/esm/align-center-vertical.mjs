export const name="align-center-vertical";
export const id="dl_4e49e15b0bf44bd49815";
export const url=new URL("../icons/align-center-vertical.svg?v=0cadd41303c477d0ea43714928ab74fde3321fcac23a0f5af3cfdf800211f0ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
