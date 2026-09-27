export const name="x-circle-fill";
export const id="dl_4a2229e5eff6367264c7";
export const url=new URL("../icons/x-circle-fill.svg?v=6828201f056aa6b4b8ef70ce9820ca2c673432c7f22a3ac8afe4474b343a899c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
