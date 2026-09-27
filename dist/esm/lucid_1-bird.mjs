export const name="lucid_1-bird";
export const id="dl_ae1ca096dfda48d59ab0";
export const url=new URL("../icons/lucid_1-bird.svg?v=7498807d19a489cacc81491bfb2a6ddcbbdb51785d02edfafc820a4f4f56b5a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
