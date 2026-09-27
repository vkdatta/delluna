export const name="user-minus-duotone";
export const id="dl_da9689767be4f89da731";
export const url=new URL("../icons/user-minus-duotone.svg?v=ec00d4e3faf56093e0dae74e6990f957428e9ee0b91fffd44e4ac4d7598d9e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
