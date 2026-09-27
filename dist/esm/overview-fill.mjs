export const name="overview-fill";
export const id="dl_822a9b93519a4db90694";
export const url=new URL("../icons/overview-fill.svg?v=df8d27e5186e7807f9f744f8cd0485d5b944b75c34f25910844a341c959c4cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
