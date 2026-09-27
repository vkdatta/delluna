export const name="rectangle-fill";
export const id="dl_6fbc40b99b1c4fe6aeb5";
export const url=new URL("../icons/rectangle-fill.svg?v=bcde6ebd646f331fdba4fbda3a404ec95b3b134d5a5a92d78fcf67117013bf2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
