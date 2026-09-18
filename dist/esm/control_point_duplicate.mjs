export const name="control_point_duplicate";
export const id="dl_17387367ba0f45c898dc";
export const url=new URL("../icons/control_point_duplicate.svg?v=12549b0e1bf94f38029b83e60e29542b8a34094ae8329d08d55f56d640c1b878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
