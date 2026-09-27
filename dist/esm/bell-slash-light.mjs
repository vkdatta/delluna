export const name="bell-slash-light";
export const id="dl_f459f9b5551049e19bc5";
export const url=new URL("../icons/bell-slash-light.svg?v=8739cc42b82cbb573b2b36b7ad1fb8b7eaf619ba020364d0b2efcd0c25d0ec07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
