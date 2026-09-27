export const name="bell-simple-ringing-light";
export const id="dl_58cf7ae18044444a85dc";
export const url=new URL("../icons/bell-simple-ringing-light.svg?v=98f538f335d0f876e8fe5e599fa622e61117e86e86322afa8494ab55e22612d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
