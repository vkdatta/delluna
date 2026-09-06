export const name="arrow-fat-right-light";
export const id="dl_7157aa55d36949058445";
export const url=new URL("../icons/arrow-fat-right-light.svg?v=48c118bc20b0c3cf5323efaddd7a2dbaf407d506f407e3b95ad9ea24be1e2a74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
