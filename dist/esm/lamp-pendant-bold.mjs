export const name="lamp-pendant-bold";
export const id="dl_b2c4d18b3e724dc0a8bd";
export const url=new URL("../icons/lamp-pendant-bold.svg?v=804450e6d9af536314cd34edc58b5bb8a5b3d2bafc852fcc5c30642807b45307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
