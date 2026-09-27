export const name="arrow-line-up-left";
export const id="dl_2a88e78fdb364a12bdcd";
export const url=new URL("../icons/arrow-line-up-left.svg?v=6fcec0b8308827676ec6b0bf386e2a36f2fdeeb0f0d45150f897a253f5d65463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
