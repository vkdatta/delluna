export const name="confetti-bold";
export const id="dl_d86e0c61304f4b3abb5b";
export const url=new URL("../icons/confetti-bold.svg?v=392f37373077c8a945ece9ae4fa590355a383f65accf596b61226f22fa9016e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
