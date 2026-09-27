export const name="counter_3-fill";
export const id="dl_52438a8e2450b76f39ef";
export const url=new URL("../icons/counter_3-fill.svg?v=e2952fd1ac3633936474b4b217634a18c12ab957cff60ded9f84d41b60c1c268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
