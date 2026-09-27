export const name="barbell-light";
export const id="dl_d43d26daca49493fb7e6";
export const url=new URL("../icons/barbell-light.svg?v=ee8eadc659c9ae9240b2503fdac3ae7c44c9d7e2755cb580a480aa6a5325319b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
