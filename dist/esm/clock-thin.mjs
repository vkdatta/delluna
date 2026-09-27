export const name="clock-thin";
export const id="dl_975dc8ea7294466a9511";
export const url=new URL("../icons/clock-thin.svg?v=975016e8cbda5d41156d9529ef3ed3feae3f226e6110aadb7bdd1a908aa16b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
