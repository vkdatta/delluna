export const name="square-half-bottom-bold";
export const id="dl_beac9d985be4173980ae";
export const url=new URL("../icons/square-half-bottom-bold.svg?v=8c0bfc2ee9cb780834b3e12702bd68c8217b1ec715e7305e53b50a677ce69e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
