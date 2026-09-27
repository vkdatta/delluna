export const name="dice-three-thin";
export const id="dl_eaf1671958394a9c963c";
export const url=new URL("../icons/dice-three-thin.svg?v=84b81a7d73721e21a09969c43b3f3abd5810f4da1347002468bf8bda7328ab8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
