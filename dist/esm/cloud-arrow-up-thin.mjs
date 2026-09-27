export const name="cloud-arrow-up-thin";
export const id="dl_3b4ed474209c4d009191";
export const url=new URL("../icons/cloud-arrow-up-thin.svg?v=1ab98f09576fdd303d45dfb290b42198b289f5c6a8160150e49a4b8312d69526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
