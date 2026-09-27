export const name="lucid_2-fish";
export const id="dl_df323d16eeb24015bb75";
export const url=new URL("../icons/lucid_2-fish.svg?v=9f7393c6934717d755aca3659ba5b4a4b10460c5afd423d6bb7a21dc6d23beb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
