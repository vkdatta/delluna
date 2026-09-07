export const name="soccer-ball-thin";
export const id="dl_3ca459e430f04aad812a";
export const url=new URL("../icons/S/soccer-ball-thin.svg?v=6cbf98c36ce0a6e7ef40757f870befb73ef73077ba0c11fa31b59601dd7ea139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
