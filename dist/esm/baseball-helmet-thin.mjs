export const name="baseball-helmet-thin";
export const id="dl_6808f35414dc4732bd14";
export const url=new URL("../icons/baseball-helmet-thin.svg?v=728d7b7a9d9dae4a7ed50305848932ef7596b7bba169262edab76b1ccde717ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
