export const name="jar-label-light";
export const id="dl_63132691661c471994ca";
export const url=new URL("../icons/jar-label-light.svg?v=d48cb83ec2a0a3659efcd3085a91c2ffae7c56114cf949b61536a54f54f6a746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
