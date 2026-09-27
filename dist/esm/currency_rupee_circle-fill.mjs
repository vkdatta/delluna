export const name="currency_rupee_circle-fill";
export const id="dl_7c956f7c781b16bba763";
export const url=new URL("../icons/currency_rupee_circle-fill.svg?v=8082bff558171f69e374b8c418d7e7672616f91b926a1e35da4692c1fd5fc51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
