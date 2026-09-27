export const name="fan-thin";
export const id="dl_7d8c23a8e8684c9db54f";
export const url=new URL("../icons/fan-thin.svg?v=feba28414bdef8d6591689908ddaa6e7ec5946cb16050925b0620cbdb4a29b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
