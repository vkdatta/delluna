export const name="person_apron";
export const id="dl_f45e7eab71500ab7fc2b";
export const url=new URL("../icons/person_apron.svg?v=ea9db8f1949ed222401974f8e2ef66c6c478fc4a9f35e597c2d3230478ba0cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
