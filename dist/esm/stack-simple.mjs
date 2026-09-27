export const name="stack-simple";
export const id="dl_c944ddfe6413e403fb17";
export const url=new URL("../icons/stack-simple.svg?v=e475398da868b064a76a5efeea0c716a3a952975e3be2ff27dde74bc65ecc747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
