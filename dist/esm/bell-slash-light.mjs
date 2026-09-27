export const name="bell-slash-light";
export const id="dl_f459f9b5551049e19bc5";
export const url=new URL("../icons/bell-slash-light.svg?v=0210da6fac2647f346b281513dd073a2805a0c5e949238744d7d894f85c21a65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
