export const name="bedtime";
export const id="dl_9362f7b699adf492f2cd";
export const url=new URL("../icons/bedtime.svg?v=84d774d5612e871b6aceeec11d6d52af15f454c34ae339fe9f0459f88cedcbf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
