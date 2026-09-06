export const name="piano-keys-bold";
export const id="dl_8d6c6e83d89e42d58182";
export const url=new URL("../icons/piano-keys-bold.svg?v=d1dc4ed68c3cd8b9a4370756dfb0d196cdd38a6d6b78cc212ddbcccc1cd09f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
