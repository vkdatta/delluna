export const name="cursor-click-light";
export const id="dl_7f09dce56a4d40789434";
export const url=new URL("../icons/cursor-click-light.svg?v=3f8fee8cb10fd4ba5255d45ff62db5a21c07f376d5ea025389eb6c19473b2f7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
