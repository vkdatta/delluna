export const name="desktop-tower-thin";
export const id="dl_0e240f13d7f54571ac1c";
export const url=new URL("../icons/desktop-tower-thin.svg?v=1acac24b8d821b71dd8ea86cad57b9eac1b747985fb6ad9c90bc56851cc71d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
