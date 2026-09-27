export const name="patreon-logo";
export const id="dl_6b068deeca2444dab024";
export const url=new URL("../icons/patreon-logo.svg?v=887c11e3f19c082083e42529aafafe2ac0c6991cf753d38fc7e57a7ac5824f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
