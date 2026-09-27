export const name="hoodie-thin";
export const id="dl_929785fe5339422e94d3";
export const url=new URL("../icons/hoodie-thin.svg?v=f2d8dd323e2b389e4df255c754928b8c7f33931b4b053cc01fdc45557bd28943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
