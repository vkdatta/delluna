export const name="flow-arrow-bold";
export const id="dl_47242db022e94b49ba47";
export const url=new URL("../icons/flow-arrow-bold.svg?v=b094852937ad2e008e12c9c7fa306366bf77b6e8c25f923014cd4f7607d6e4fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
