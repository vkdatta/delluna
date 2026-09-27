export const name="ballot";
export const id="dl_e78b728f011cd7855fdb";
export const url=new URL("../icons/ballot.svg?v=1617908b617c1cd3bbc3e6d7f378534ef0bd5782990f1a1a6037f293290d99f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
