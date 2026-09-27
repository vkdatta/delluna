export const name="indent";
export const id="dl_a811fd85a4862189d4e2";
export const url=new URL("../icons/indent.svg?v=0fe2c60d18a2cb2bfd6bb0146737ad0c7a645c4924a94f4c4379103ca99a096f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
