export const name="crop-bold";
export const id="dl_d035d75e8e794ffc8399";
export const url=new URL("../icons/crop-bold.svg?v=d88fd160aaff06bf7818b267367886d47a7c8f64887ad2f417969858b435b82c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
