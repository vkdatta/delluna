export const name="health_cross";
export const id="dl_6c6ef3ad9cacc0d0dee7";
export const url=new URL("../icons/health_cross.svg?v=d71bf24f9e6450f35200183fee60dd37ebf20acbce2b1e09c2306edee590b36e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
