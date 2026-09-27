export const name="lucid_2-globe-lock";
export const id="dl_96c7ef4883f545df8401";
export const url=new URL("../icons/lucid_2-globe-lock.svg?v=70c0c3b85b1a3f8132af9f4173c57b89730ff472ce86058ecacf91cdae5db3e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
