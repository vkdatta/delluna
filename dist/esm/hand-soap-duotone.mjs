export const name="hand-soap-duotone";
export const id="dl_2377eda19f8045b29217";
export const url=new URL("../icons/hand-soap-duotone.svg?v=d8ee2eb7a617b9c096776bb1e0e5261ebf694c4fa8178fbeedb7c9b650b03ec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
