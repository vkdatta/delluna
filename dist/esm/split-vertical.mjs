export const name="split-vertical";
export const id="dl_5e83f3ec783b7ef8c6a2";
export const url=new URL("../icons/split-vertical.svg?v=9e5516d9f7b84446bced36e6af5eb370ad8a3151a0962def53024ad7f8008bbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
