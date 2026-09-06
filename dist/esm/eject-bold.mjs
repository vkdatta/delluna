export const name="eject-bold";
export const id="dl_327534cc95674ddbaac7";
export const url=new URL("../icons/eject-bold.svg?v=589bdb7e72489455b11d349231c3aa2e2735a7985f4e21de9902893c8f32aa90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
