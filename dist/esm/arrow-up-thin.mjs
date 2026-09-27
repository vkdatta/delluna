export const name="arrow-up-thin";
export const id="dl_c48ff22a299341b88c3a";
export const url=new URL("../icons/arrow-up-thin.svg?v=8142978636b17bf46f7fc8bad8c9987e45a2c0457551d71d63c443215e7333c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
