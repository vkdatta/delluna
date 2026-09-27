export const name="medal";
export const id="dl_a0c024e4840c437095ae";
export const url=new URL("../icons/medal.svg?v=4079a9ed5b55c9f4f8199d6eec12860fbb8984052710a1ddd193bdd9f851d1ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
