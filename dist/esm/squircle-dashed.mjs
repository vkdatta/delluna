export const name="squircle-dashed";
export const id="dl_81621577ed5e4500b11f";
export const url=new URL("../icons/squircle-dashed.svg?v=d7e4fcc50b25bdd92d0e81df8517a03c08b46e7b83dbeb5e5443a4d95a1606fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
