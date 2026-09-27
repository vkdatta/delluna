export const name="dice-five";
export const id="dl_e69b90a1b504472cb6b3";
export const url=new URL("../icons/dice-five.svg?v=537f47269ec5eaa63bfa2cd7720753c04ab7d03c174b030e5d76aeae0e43ed5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
