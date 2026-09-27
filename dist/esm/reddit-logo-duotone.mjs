export const name="reddit-logo-duotone";
export const id="dl_3a448ddc92884b6583b7";
export const url=new URL("../icons/reddit-logo-duotone.svg?v=5c45a8a32e2c263734f41a95f4ff9f3f25c511c995e1e98f6128cbbb20200040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
