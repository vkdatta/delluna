export const name="bath_bedrock";
export const id="dl_37c8d7988fe86f2bafb7";
export const url=new URL("../icons/bath_bedrock.svg?v=6569b7b4eecd3b87363e04ae57d241aab0fa485b08fece1d4dc07b667ae9fe5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
