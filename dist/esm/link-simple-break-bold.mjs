export const name="link-simple-break-bold";
export const id="dl_ef2587c2c01647c4a624";
export const url=new URL("../icons/link-simple-break-bold.svg?v=9d64dd252c4c06b5ac0198b3d2ec74db629ce9b97c4b30ed254723bb4820ca93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
