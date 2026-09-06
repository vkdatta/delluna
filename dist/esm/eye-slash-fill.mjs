export const name="eye-slash-fill";
export const id="dl_51faf19804ed4de08f30";
export const url=new URL("../icons/eye-slash-fill.svg?v=fc34ad807da63ae5f99a235618cddc1b2bef8d98d7c95004d38b61312540b90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
