export const name="square-logo-fill";
export const id="dl_3f6ff8a22dcf3752bea1";
export const url=new URL("../icons/square-logo-fill.svg?v=3ab4f35892b75b0f06476f319a56ef05cb8012590e94c172a67b8f642024c02d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
