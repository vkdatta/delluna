export const name="asterisk-light";
export const id="dl_e4c8bad305924f00baf8";
export const url=new URL("../icons/asterisk-light.svg?v=91f23d73ca8765518500f58056b019d8735b674896272eba91af065900577019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
