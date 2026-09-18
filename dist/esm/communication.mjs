export const name="communication";
export const id="dl_ec1ceacedbd1422cb428";
export const url=new URL("../icons/communication.svg?v=b39493ad366283aa2cb72198c54ad570ce24e0348be3e9ed67d19468762eab2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
