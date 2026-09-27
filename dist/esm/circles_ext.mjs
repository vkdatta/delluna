export const name="circles_ext";
export const id="dl_d741a69eecde790546ec";
export const url=new URL("../icons/circles_ext.svg?v=58e26f942c343ec1a38fa1d1de214ddd8fa98741bb87516a4a4c6c3e10692197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
