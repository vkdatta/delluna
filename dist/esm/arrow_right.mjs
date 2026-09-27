export const name="arrow_right";
export const id="dl_8d4e62f602f87346f319";
export const url=new URL("../icons/arrow_right.svg?v=229736f72282b93b7d7e9568bbf91f8dd52a3242b766581bbb303ca180b41f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
