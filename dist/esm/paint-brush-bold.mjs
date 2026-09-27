export const name="paint-brush-bold";
export const id="dl_90aa01635e374781bc29";
export const url=new URL("../icons/paint-brush-bold.svg?v=b5194d9d91e31782e2d41dfba3f3ff0fbe0806552a3a1bf0e2d1a1afd33108f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
