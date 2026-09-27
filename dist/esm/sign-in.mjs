export const name="sign-in";
export const id="dl_6859eecf212049e4727b";
export const url=new URL("../icons/sign-in.svg?v=4385155e42326f5e3de5c83a9afbbb21e6ff4d2a96b96b8b04bcf812b6e61f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
