export const name="no_luggage";
export const id="dl_66d2e61f3d5c7444130e";
export const url=new URL("../icons/no_luggage.svg?v=0c1a274480a19711183e35c09abd69b64648829fe66cc6364de0e08a37d6bee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
