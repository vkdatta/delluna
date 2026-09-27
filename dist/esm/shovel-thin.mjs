export const name="shovel-thin";
export const id="dl_7e54f8ccdb139cd51f08";
export const url=new URL("../icons/shovel-thin.svg?v=1e44b9c4821cd263b16442713ff71b5740526235bafa84d4b928f7b8f12e4f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
