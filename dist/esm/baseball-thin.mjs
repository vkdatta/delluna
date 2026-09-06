export const name="baseball-thin";
export const id="dl_0ed3998b6f2d4418b2aa";
export const url=new URL("../icons/baseball-thin.svg?v=e6eab112d3dfba2ba5b5f9d3c2d40b6aaed30b586c32370e8081b177606bd330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
