export const name="basketball-light";
export const id="dl_e00420ba3bc6485bb055";
export const url=new URL("../icons/basketball-light.svg?v=1ae00c9163e3343b15493b44161b6959bae96981833f4b0dc8bc959784efa72c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
