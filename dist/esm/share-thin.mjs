export const name="share-thin";
export const id="dl_ddea9404bb89422ddffd";
export const url=new URL("../icons/share-thin.svg?v=eb914d68ca5d0d7926e39552e0964722874bdf3e3e82413bcfe7689a77159e81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
