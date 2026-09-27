export const name="plus-circle-thin";
export const id="dl_a12178426ed34b67985b";
export const url=new URL("../icons/plus-circle-thin.svg?v=dbc5c9db4e4778c99acbede1ccd5578869e167d3e207731cf58087f066abdef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
