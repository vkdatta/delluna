export const name="voicemail";
export const id="dl_7be181ec87394d82ac90";
export const url=new URL("../icons/voicemail.svg?v=71aca52428d3042a7e9ce19be7976a02786d80a71edf9e472fca1ac9c7d11060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
