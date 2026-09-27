export const name="virus-duotone";
export const id="dl_262733e01406c7f7310a";
export const url=new URL("../icons/virus-duotone.svg?v=04258d77296aaf6ad5983d41b4af7670e5227aa609c86a15205b98bfb65a8bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
