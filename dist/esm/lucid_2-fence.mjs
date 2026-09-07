export const name="lucid_2-fence";
export const id="dl_e001a227d3c44f6984ec";
export const url=new URL("../icons/lucid_2-fence.svg?v=e9e8859a7d7826f24fd4a0eb4402fa489bb14e0dd6f4cb61c64ee72e3d6254ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
