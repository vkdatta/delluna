export const name="fediverse-logo-thin";
export const id="dl_0fe4e60caddb4ec2b1fd";
export const url=new URL("../icons/fediverse-logo-thin.svg?v=326fea642b8d14ec0687047a4f08b683fc57d1e902fa4d3979f226dedf434c49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
