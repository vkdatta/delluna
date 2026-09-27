export const name="record_voice_over";
export const id="dl_58770f34a121dfc8c764";
export const url=new URL("../icons/record_voice_over.svg?v=56bc943dacb56dc85f9e77fd6fdb8fcfb7afe00afe6288d51e614e35d236055a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
