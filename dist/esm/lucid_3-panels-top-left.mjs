export const name="lucid_3-panels-top-left";
export const id="dl_237bb50671524639bf23";
export const url=new URL("../icons/lucid_3-panels-top-left.svg?v=dce807610bb7bc37c5eaed81520edab8761a3a2724a63cfb1e97d9248d938ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
