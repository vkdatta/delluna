export const name="rabbit-fill";
export const id="dl_a8fd9076b5e84a97aa4b";
export const url=new URL("../icons/rabbit-fill.svg?v=d8b14c2ad2b482e5627568ea7841cec21bc0608b0804e537031fd2a8bdf067f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
