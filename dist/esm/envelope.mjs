export const name="envelope";
export const id="dl_bd33395556a14141a411";
export const url=new URL("../icons/envelope.svg?v=77b97ee842e77fcc9851a3ff5ec41fd1754d262783ad50881e0799258540214a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
