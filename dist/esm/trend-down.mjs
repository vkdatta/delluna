export const name="trend-down";
export const id="dl_bf551fa6589fe939059e";
export const url=new URL("../icons/trend-down.svg?v=1d650c60ff0d143d55db92d490408cfb0d0690f3f7e8a273b2c52f9549d9770a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
