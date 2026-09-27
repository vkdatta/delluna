export const name="file-js-light";
export const id="dl_ae8c20e91f7342b9995c";
export const url=new URL("../icons/file-js-light.svg?v=825a1042395d88ce14a2d5efc6f03c22e09add9411ba1d51d1a1c09d0764648f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
