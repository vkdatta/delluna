export const name="quotes-fill";
export const id="dl_7b9f784f549e4c499669";
export const url=new URL("../icons/quotes-fill.svg?v=cd1ab04e3d3ebf72750cbcb6116113636d334686c48f3130e8ee366ebaf2eb95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
