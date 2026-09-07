export const name="traffic-cone-bold";
export const id="dl_5fc8b45a01cc450197c0";
export const url=new URL("../icons/T/traffic-cone-bold.svg?v=1d32f6a79080905187b1ccc6994a54d984f03c20e59251a42d7ca01d16e73320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
