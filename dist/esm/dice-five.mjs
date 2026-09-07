export const name="dice-five";
export const id="dl_e69b90a1b504472cb6b3";
export const url=new URL("../icons/dice-five.svg?v=0cff2538c9941f52defbf9da109204d46f648aec7c0420fe1d5511f718a45087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
