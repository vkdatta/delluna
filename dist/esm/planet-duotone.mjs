export const name="planet-duotone";
export const id="dl_0d7ff7f61cf14d4086f2";
export const url=new URL("../icons/planet-duotone.svg?v=a3cb8ee5812b4acbadfc8ddd54a2c1e830f602bccf216d940190878d03e18e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
