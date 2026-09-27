export const name="car-fill";
export const id="dl_40e2854e3c0c43c08500";
export const url=new URL("../icons/car-fill.svg?v=08d40bb8535f9545407d7e97d1a949b3f8bedd8122ed2fbec4425b9fee086139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
