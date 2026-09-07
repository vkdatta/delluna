export const name="square-cross";
export const id="dl_e7aac34e8ffd4a8f9c98";
export const url=new URL("../icons/close/square-cross.svg?v=ee843e3880294804595302c4ce3ac9f8c0c51ea708168203bbaf83bb924625bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
