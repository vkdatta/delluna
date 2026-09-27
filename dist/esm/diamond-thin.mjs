export const name="diamond-thin";
export const id="dl_9720b8b47f1647c3be75";
export const url=new URL("../icons/diamond-thin.svg?v=2d2796a1c0c613530867170bf9e3c18be8fdc97ece29dffe4187fddf37ac0af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
