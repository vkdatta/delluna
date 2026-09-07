export const name="baseball-helmet-thin";
export const id="dl_6808f35414dc4732bd14";
export const url=new URL("../icons/baseball-helmet-thin.svg?v=bbc6e78a369989789ee4e3aacfd2104445cbe0152730f89e5682e5948b95c7f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
