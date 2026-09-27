export const name="skype-logo-light";
export const id="dl_bdd6f87345fcbe484885";
export const url=new URL("../icons/skype-logo-light.svg?v=294b3326f3be1bc260c66e49047d893e3a41656a68a2ee3cb56f7839e66dc4c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
