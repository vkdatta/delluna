export const name="sailboat-light";
export const id="dl_147a1f7e066e2806d55c";
export const url=new URL("../icons/sailboat-light.svg?v=c44ac3e2bde0f7697fa6b9e93e902db8b5edfe32d3a49e593627fe125a83979d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
