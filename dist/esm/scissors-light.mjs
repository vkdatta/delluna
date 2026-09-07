export const name="scissors-light";
export const id="dl_12536d576d5242aa84e1";
export const url=new URL("../icons/S/scissors-light.svg?v=0c732b56e2bc55297af404e6140106d99b6d21efbebb70ca0d8356ef420f66c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
