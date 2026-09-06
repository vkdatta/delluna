export const name="download-thin";
export const id="dl_6f403cf34edd4136be2d";
export const url=new URL("../icons/download-thin.svg?v=cc9a24c8940b2eb2546b17e8c17fbe0c4d3197c1092c732d8837e9da3a05db44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
