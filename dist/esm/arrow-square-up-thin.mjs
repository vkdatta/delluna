export const name="arrow-square-up-thin";
export const id="dl_d46f36ca8dea4a23a86e";
export const url=new URL("../icons/arrow-square-up-thin.svg?v=2c9af4e78dd1bceba1da85d14075f9479074ae7ab17964ea67db8c5084c5ec12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
