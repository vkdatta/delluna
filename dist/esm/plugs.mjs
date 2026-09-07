export const name="plugs";
export const id="dl_2403fe24f1a54e9cb22f";
export const url=new URL("../icons/plugs.svg?v=b4da637b48602eab7553fa8eed41b3dc2aaa0461064cf6a1261cb1c44a900146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
