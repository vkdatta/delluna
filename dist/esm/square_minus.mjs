export const name="square_minus";
export const id="dl_f8ccbbef5bc1fa262a16";
export const url=new URL("../icons/square_minus.svg?v=30068c9408142d056e36440369286f2dede69863a6872abd334313beb70a1763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
