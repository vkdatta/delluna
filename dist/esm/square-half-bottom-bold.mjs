export const name="square-half-bottom-bold";
export const id="dl_9baf80413d834048a60e";
export const url=new URL("../icons/S/square-half-bottom-bold.svg?v=15837933551699d2bf3a5b287b65ac25502c890bc0aed0d2e0b44290ab601a3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
