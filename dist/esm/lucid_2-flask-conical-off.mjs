export const name="lucid_2-flask-conical-off";
export const id="dl_667af1f6d19f45b8a6cd";
export const url=new URL("../icons/lucid_2-flask-conical-off.svg?v=3404d4fa8868c0922e4da6415f648f0b8c7ce502510107f733ad00e9a5a25b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
