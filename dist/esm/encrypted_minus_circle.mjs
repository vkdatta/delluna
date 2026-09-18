export const name="encrypted_minus_circle";
export const id="dl_4ce4f31a3c5748f0a9f6";
export const url=new URL("../icons/encrypted_minus_circle.svg?v=675c1e6bf9ced9725286aa3d1dac1d5e373adf4c31a04d2d355e2237b86cff93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
