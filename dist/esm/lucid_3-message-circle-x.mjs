export const name="lucid_3-message-circle-x";
export const id="dl_217be2ef63d44afd9413";
export const url=new URL("../icons/lucid_3-message-circle-x.svg?v=f625802fd2b1725f9f6b2468eae35cfffce38a3bc5434f2be3c7bd9fea113404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
