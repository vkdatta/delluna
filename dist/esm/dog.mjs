export const name="dog";
export const id="dl_87009f63ca274b1e9fec";
export const url=new URL("../icons/dog.svg?v=0bc4044ac4d590007a1c87e636aec4e6c43b142251b7b1cc132bb1b3ae374db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
