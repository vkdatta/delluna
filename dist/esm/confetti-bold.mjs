export const name="confetti-bold";
export const id="dl_d86e0c61304f4b3abb5b";
export const url=new URL("../icons/confetti-bold.svg?v=7edea87f1409ee89465412a2566082a1eeb1708e64a6653e8bbba544a71ae513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
