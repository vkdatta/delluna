export const name="arrow-fat-lines-up-bold";
export const id="dl_9503d224d0e04f2db658";
export const url=new URL("../icons/arrow-fat-lines-up-bold.svg?v=af7dc395d58bbc6b6de83393d42910dedb4fd59eee40c7ebb51ad50d1089d2a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
