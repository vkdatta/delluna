export const name="bloodtype";
export const id="dl_c3b1aadcc06446ecb4be";
export const url=new URL("../icons/bloodtype.svg?v=b3e1072894ca4c6f636ba4ba44bbdfe6e928a3645a419a3e9fde6c02905628a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
