export const name="lucid_2-flask-conical-off";
export const id="dl_667af1f6d19f45b8a6cd";
export const url=new URL("../icons/lucid_2-flask-conical-off.svg?v=6c89cc44359af856f296d29dbeb85719096384f4e374d0bc0d741d3aa49142ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
