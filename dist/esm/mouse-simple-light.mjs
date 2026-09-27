export const name="mouse-simple-light";
export const id="dl_409943d0f4c840f38817";
export const url=new URL("../icons/mouse-simple-light.svg?v=f6feaf3ddd54c4057de5c88a751593337fedaedf001e3fcb58642396616e7a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
