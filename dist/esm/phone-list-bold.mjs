export const name="phone-list-bold";
export const id="dl_2e34c9fc0d7443ddb57a";
export const url=new URL("../icons/phone-list-bold.svg?v=13eca298445a19b9a3d002816b78e64a55b5e77abcdc46c83429864572ba7a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
