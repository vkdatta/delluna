export const name="1x_mobiledata_badge";
export const id="dl_abec52a0dfd6894e83ce";
export const url=new URL("../icons/1x_mobiledata_badge.svg?v=15ab7005417b4ca7688c6ad8fa54bfe0f870faa36f9ee7b13223f3156917e1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
