export const name="warning-diamond-thin";
export const id="dl_b4f5ca72ce5f785f8fc4";
export const url=new URL("../icons/warning-diamond-thin.svg?v=db14fb59e65b8c27676eb505e12dd7b373d0e678cc589292a42e691c0c964932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
