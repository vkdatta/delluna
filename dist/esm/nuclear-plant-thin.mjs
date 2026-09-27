export const name="nuclear-plant-thin";
export const id="dl_e8f8eda19b624663959f";
export const url=new URL("../icons/nuclear-plant-thin.svg?v=d7af28d7e488220a7b8e6d92a9e7635b3c1e5a8914ba7f50382be2fed05d4c3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
