export const name="waves-vertical";
export const id="dl_a38473c39365489e9363";
export const url=new URL("../icons/waves-vertical.svg?v=2573bd7388fbbe7c1d81a210745a8525c37f91b7f181625a085012369d0935a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
