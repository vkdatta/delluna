export const name="escalator-up-bold";
export const id="dl_42cb4903f6af4d61bb3d";
export const url=new URL("../icons/escalator-up-bold.svg?v=6887fed0c4de8b2575768bf1b7cafbdb6261f961b5ae3eef3f123f085f46a74c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
