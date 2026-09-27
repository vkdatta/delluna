export const name="local_convenience_store";
export const id="dl_1191a99a77cac320f433";
export const url=new URL("../icons/local_convenience_store.svg?v=6e70145b4340af6a1b5a43ccf9d5e24b99335c6cd02e81f70c9128ba7b9869c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
