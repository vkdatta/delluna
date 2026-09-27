export const name="number-circle-five-thin";
export const id="dl_476c2ce481464fd5b63e";
export const url=new URL("../icons/number-circle-five-thin.svg?v=2507d6027b2b91a86336669f758972a5c7644788d7ab13ca2d4c23351e509bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
