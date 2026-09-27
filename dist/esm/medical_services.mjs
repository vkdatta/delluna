export const name="medical_services";
export const id="dl_457e43a8430914824b3f";
export const url=new URL("../icons/medical_services.svg?v=0010e3e5fe81e96ae0b0f874911b08962ca5c526381e81ea114761c2b4334d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
