export const name="wave-sine-duotone";
export const id="dl_a9606d48a6bd82e73bfe";
export const url=new URL("../icons/wave-sine-duotone.svg?v=89a019255c37ed36bf1632d435ae8134978543199c2508b8116158aad6437727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
