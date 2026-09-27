export const name="bath_bedrock";
export const id="dl_62ebd8037d55b6ff0c9c";
export const url=new URL("../icons/bath_bedrock.svg?v=85a2cb65b7f1c6e483fc84caf171288086fb5a7353f0bab02c69b5ac34d20ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
