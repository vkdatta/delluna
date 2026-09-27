export const name="baseball-light";
export const id="dl_04183be94f7442808ddc";
export const url=new URL("../icons/baseball-light.svg?v=bc7443d74d7c8d3234cb82c67efc6e7492b5acc9722e7ec0a03440bf67c5a923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
