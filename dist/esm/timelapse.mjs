export const name="timelapse";
export const id="dl_c56d17ca085263c1d06f";
export const url=new URL("../icons/timelapse.svg?v=b475585095cabe05e90eb4bc63b281cbe86fe5377c3693351581eb0500ff72ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
