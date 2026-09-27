export const name="ladder-simple-bold";
export const id="dl_b7eb0afb4dc9473ab7c6";
export const url=new URL("../icons/ladder-simple-bold.svg?v=6fd186c80d56eac4c83f34f5b4072c23110f4ff798737e5daca161032608e3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
