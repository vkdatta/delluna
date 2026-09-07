export const name="arrow-up-right-fill";
export const id="dl_91b803b3f7b647dfaca3";
export const url=new URL("../icons/arrow-up-right-fill.svg?v=dd24c87b3fc52a5b8bb0712901f9f4d2422c4c06a28c1a422eac5a6cc3cdf243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
