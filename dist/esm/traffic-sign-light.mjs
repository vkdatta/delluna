export const name="traffic-sign-light";
export const id="dl_f42de138b59f4f96aad8";
export const url=new URL("../icons/T/traffic-sign-light.svg?v=ca97b7fb93f3f3c9b9003fb5b7c7b238c004183d603422404c467d81e17846a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
