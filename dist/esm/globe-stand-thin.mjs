export const name="globe-stand-thin";
export const id="dl_0a329e858cd74cb69abb";
export const url=new URL("../icons/globe-stand-thin.svg?v=10db3a252b782ed4dfffa15c8ea39dc0ded7b35951f67f958f6592c9fdd63d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
